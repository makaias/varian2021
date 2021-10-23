import {Alert, AlertDescription, AlertIcon, AlertTitle} from '@chakra-ui/alert';
import {CloseButton} from '@chakra-ui/react';
import {useFormikContext} from 'formik';
import React, {ReactElement} from 'react';

interface Props {
  name?: string;
  title?: string;
}

export default function FormikApiError({name = '__api__', title = ''}: Props): ReactElement {
  const formik = useFormikContext();

  console.log(formik);

  const error = formik.errors && formik.errors[name];
  if (!error) return null;

  return (
    <Alert status="error">
      <AlertIcon />
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      <AlertDescription>{error}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" onClick={() => formik.setFieldError(name, null)} />
    </Alert>
  );
}
