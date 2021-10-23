import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import LoginWall from '../components/login/LoginWall';

interface Props {}

export default function Login({}: Props): ReactElement {
  useLayoutConfig({bg: 'plain'});
  return <LoginWall />;
}
