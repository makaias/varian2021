import React, {ReactElement} from 'react';
import {useAuthBackend} from '../context/AuthBackend';

interface Props {}

export default function User({}: Props): ReactElement {
  const {user} = useAuthBackend();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
