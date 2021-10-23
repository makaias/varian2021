import {Input, InputProps} from '@chakra-ui/input';
import {Field, FieldAttributes} from 'formik';
import React, {ReactElement} from 'react';

type Props = FieldAttributes<any> | InputProps;

export default function FormikInput(props: Props): ReactElement {
  return <Field {...props} as={Input} />;
}
