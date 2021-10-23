import {Flex} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Image} from '@chakra-ui/react';
import ContactPageImage from './symptom_page_content_image.png';
import {useLayoutConfig} from '../../../app/layout';

interface Props {
  title: string;
}

export default function OneSymptom(props: Props): ReactElement {
  useLayoutConfig({bg: 'plain', title: props.title});
  return (
    <>
      <Flex paddingTop={6} paddingBottom={6}>
        <Image src={ContactPageImage} />
      </Flex>
    </>
  );
};
