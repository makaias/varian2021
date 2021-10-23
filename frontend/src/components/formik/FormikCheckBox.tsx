import {Checkbox, CheckboxProps} from '@chakra-ui/checkbox';
import {useFormikContext} from 'formik';
import React, {ReactElement} from 'react';

type Props = CheckboxProps;

export default function FormikCheckBox({name, ...props}: Props): ReactElement {
  const formik = useFormikContext();
  const value = formik.values && formik.values[name];

  return (
    <Checkbox {...props} isChecked={value} onChange={(e) => name && formik.setFieldValue(name, e.target.checked)} />
  );
}
