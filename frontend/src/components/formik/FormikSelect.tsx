import {Select, SelectProps} from '@chakra-ui/select';
import {Field, FieldAttributes} from 'formik';
import React, {ReactElement} from 'react';

type Props = FieldAttributes<any> | SelectProps;

export default function FormikSelect(props: Props): ReactElement {
  return <Field {...props} as={Select} />;
}
