import {Flex} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Image} from '@chakra-ui/react';
import ContactPageImage from './symptom_page_content_image.png';

export default function Inflammatory(): ReactElement {
  //TODO: Use plain background and set "Inflammatory Skin Conditions" as title with the G.Á.NY. tool
  //TODO: Repeat this for the 5 other symptoms with different titles. The content image stays the same
  return (
    <>
      <Flex paddingTop={6} paddingBottom={6}>
        <Image src={ContactPageImage} />
      </Flex>
    </>
  );
};
