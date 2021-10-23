import {FormControl} from '@chakra-ui/form-control';
import {Container, Heading, VStack} from '@chakra-ui/layout';
import {Form, Formik} from 'formik';
import React, {FC} from 'react';
import {useAuthBackend} from '../../context/AuthBackend';
import FormikApiError from '../formik/FormikApiError';
import FormikButton from '../formik/FormikButton';
import FormikInput from '../formik/FormikInput';

export interface LoginCommand {
  identifier: string;
  password: string;
}

const LoginForm: FC<{}> = () => {
  const {login} = useAuthBackend();

  return (
    <Formik
      initialValues={{
        identifier: '',
        password: '',
      }}
      onSubmit={async (v, formik) => {
        try {
          await login(v);
        } catch (err) {
          formik.setFieldError('__api__', err.message);
        }
      }}
    >
      <Container as={Form} maxW="sm" p={6} bg="white" borderRadius={6}>
        <VStack spacing={4} align="stretch">
          <Heading m={0} p={0} textAlign="center" color="primary.500">
            Login
          </Heading>
          <FormikApiError />
          <FormControl>
            <FormikInput name="identifier" type="text" required placeholder="Username" />
          </FormControl>
          <FormControl>
            <FormikInput name="password" type="password" required placeholder="Password" />
          </FormControl>
          <FormikButton type="submit" variant="solid" colorScheme="primary">
            Login
          </FormikButton>
        </VStack>
      </Container>
    </Formik>
  );
};

export default LoginForm;
