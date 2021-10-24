import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import ScholarBlock from '../components/scholar/ScholarBlock';

interface Props {}

export default function Scholar({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Look for publications',
  });
  
  return (
    <>
      <ScholarBlock keyword="cancer" itemCount={5}></ScholarBlock>
      <br />
    </>
  );
}
