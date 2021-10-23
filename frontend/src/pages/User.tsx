import React, {ReactElement} from 'react';
import {LayoutConfig, useLayoutConfig} from '../app/layout';
import {useAuthBackend} from '../context/AuthBackend';

interface Props {}

const layoutConfig: LayoutConfig = {
  bg: 'plain',
  title: 'User page',
};

export default function User({}: Props): ReactElement {
  useLayoutConfig(layoutConfig);

  const {user} = useAuthBackend();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
