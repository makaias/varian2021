import {Button, ButtonProps} from '@chakra-ui/button';
import {useFormikContext} from 'formik';
import React, {ReactElement} from 'react';

export default function FormikButton(props: ButtonProps): ReactElement {
  const formik = useFormikContext();
  return <Button {...props} isLoading={formik.isSubmitting || formik.isValidating} />;
}
