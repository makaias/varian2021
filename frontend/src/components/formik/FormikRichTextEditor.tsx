import {FieldAttributes, useFormikContext} from 'formik';
import React, {ReactElement} from 'react';
import {RichTextEditor, RichTextEditorProps} from '../rte/RichTextEditor';

type Props = FieldAttributes<any> | RichTextEditorProps;

export default function FormikRichTextEditor(props: Props): ReactElement {
  const formik = useFormikContext<string>();
  return (
    <RichTextEditor value={formik.values[props.name]}
                    setValue={newValue => formik.setFieldValue(props.name, JSON.stringify(newValue))}
                    readOnly={props.readOnly}
    />
  );
}
