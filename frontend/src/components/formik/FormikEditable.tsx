import {Editable, EditableInput, EditablePreview, EditableProps} from '@chakra-ui/react';
import {useFormikContext} from 'formik';
import _ from 'lodash';
import React, {ReactElement} from 'react';

type FormikEditableProps = {
  name: string;
} & EditableProps;

export default function FormikEditable({name, ...props}: FormikEditableProps): ReactElement {
  const formik = useFormikContext();

  const value = _.get(formik.values, name) || null;

  return (
    <Editable value={value} onChange={(v) => formik.setFieldValue(name, v)} {...props}>
      <EditablePreview width="100%" />
      <EditableInput outlineColor="transparent" />
    </Editable>
  );
}
