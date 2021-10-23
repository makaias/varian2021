import React, {useCallback, useMemo, useState} from 'react';
import isHotkey from 'is-hotkey';
import {Editable, withReact, Slate, ReactEditor} from 'slate-react';
import {Editor, Transforms, createEditor, Node} from 'slate';
import {withHistory} from 'slate-history';
import {Box} from '@chakra-ui/react';
import {Element, Leaf, toggleMark, Toolbar} from './components';

// @refresh reset
const HOTKEYS: {[hotkey: string]: string} = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};

const emptyEditorValue: Node[] = [
  {
    type: 'paragraph',
    children: [{text: ''}]
  }
];


export interface Props {
  readOnly: boolean;
  /**
   * use Node[] for speed if you are editing the content
   */
  value: Node[] | string;
  setValue?: (newValue: Node[]) => void;
}

function getEditorValue(input: Node[] | string) {
  if (!input) {
    return emptyEditorValue;
  }

  let supposedNodeValue = input;
  if (typeof input === 'string') {
    supposedNodeValue = JSON.parse(input);
  }

  if (supposedNodeValue && Array.isArray(supposedNodeValue) && supposedNodeValue.length > 0) {
    return supposedNodeValue;
  }
  return emptyEditorValue;
}

export const RichTextEditor: React.FC<Props> = (props) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const editorValue = getEditorValue(props.value);

  //focus selection
  const [focused, setFocused] = React.useState(false);
  const savedSelection = React.useRef(editor.selection);

  const onFocus = React.useCallback(() => {
    setFocused(true);
    if (!editor.selection && editorValue?.length) {
      Transforms.select(
        editor,
        savedSelection.current ?? Editor.end(editor, [])
      );
    }
  }, [editor]);

  const onBlur = React.useCallback(() => {
    setFocused(false);
    savedSelection.current = editor.selection;
  }, [editor]);

  const divRef = React.useRef<HTMLDivElement>(null);

  const focusEditor = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.target === divRef.current) {
        ReactEditor.focus(editor);
        e.preventDefault();
      }
    },
    [editor]
  );

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        const mark = HOTKEYS[hotkey];
        toggleMark(editor, mark);
      }
    }
  };

  return (
    <Box ref={divRef} onMouseDown={focusEditor} borderWidth={'1px'}>
      <Slate
        editor={editor}
        value={editorValue ?? emptyEditorValue}
        onChange={(newValue) => props.setValue?.(newValue)}
      >
        {!props.readOnly && (
          <Toolbar />
        )}
        <Box padding={'15px 5px'}>
          <Editable
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder='Enter some rich text…'
            spellCheck
            style={{minHeight: '150px', resize: 'vertical', overflow: 'auto'}}
            readOnly={props.readOnly}
          />
        </Box>
      </Slate>
    </Box>
  );
};
