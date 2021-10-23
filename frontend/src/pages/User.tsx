import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import {useAuthBackend} from '../context/AuthBackend';

interface Props {}

export default function User({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'User page',
  });

  const {user} = useAuthBackend();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
