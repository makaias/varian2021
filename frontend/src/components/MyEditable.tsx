import React, {FC} from 'react';
import {Editable, EditableInput, EditablePreview} from '@chakra-ui/react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  isEditable: boolean;
}

const MyEditable: FC<Props> = (props) => {
  return (
    <Editable value={props.value} onChange={props.onChange} isDisabled={!props.isEditable}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export default MyEditable;