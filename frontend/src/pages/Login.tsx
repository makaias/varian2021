import {Container} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import LoginForm from '../components/login/LoginForm';

interface Props {}

export default function Login({}: Props): ReactElement {
  useLayoutConfig({bg: 'fancy'});
  return (
    <Container pt={16}>
      <LoginForm />
    </Container>
  );
}
