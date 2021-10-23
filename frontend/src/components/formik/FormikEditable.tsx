import {Editable, EditableInput, EditablePreview, EditableProps} from '@chakra-ui/react';
import {useFormikContext} from 'formik';
import React, {ReactElement} from 'react';

type FormikEditableProps = {
  name: string;
} & EditableProps;

export default function FormikEditable({name, ...props}: FormikEditableProps): ReactElement {
  const formik = useFormikContext();

  const value = formik.values && formik.values[name];

  return (
    <Editable value={value} onChange={(v) => formik.setFieldValue(name, v)} {...props}>
      <EditablePreview width="100%" />
      <EditableInput outlineColor="transparent" />
    </Editable>
  );
}
