import {FieldAttributes, useFormikContext} from 'formik';
import _ from 'lodash';
import React, {ReactElement} from 'react';
import {RichTextEditor, RichTextEditorProps} from '../rte/RichTextEditor';

type Props = FieldAttributes<any> | RichTextEditorProps;

export default function FormikRichTextEditor(props: Props): ReactElement {
  const formik = useFormikContext<string>();
  const value = _.get(formik.values, props.name);

  return (
    <RichTextEditor
      value={value}
      setValue={(newValue) => formik.setFieldValue(props.name, JSON.stringify(newValue))}
      readOnly={props.readOnly}
    />
  );
}
