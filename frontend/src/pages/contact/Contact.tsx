import {Container, Flex, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Image} from '@chakra-ui/react';
import ContactPageImage from './contact_page_image.bmp';
import {FaEnvelope, FaPhone} from 'react-icons/all';
import UniformGrid from '../../components/UniformGrid';
import {useLayoutConfig} from '../../app/layout';

export default function Contact(): ReactElement {
  useLayoutConfig({title: 'Contact', bg: 'plain'});

  return (
    <>
      <br />
      <Text>
        When you need treatment for cancer, you have a lot to learn and think about.
        It is normal to feel overwhelmed and confused.
        But, talking with your doctor and learning all you can about all your treatment options, including clinical
        trials,
        can help you make a decision you feel good about.
      </Text>

      <VStack>
        <br />
        <br />
        <Text>If you or someone you care about has been diagnosed with cancer, we're here to help.</Text>
        <Text fontWeight={'bold'}> Do not hesitate to contact us! </Text>
      </VStack>

      <UniformGrid columns={[1, 1, 2]}>
        <Flex paddingTop={6} paddingBottom={6}>
          <Image src={ContactPageImage} />
        </Flex>

        <VStack justify='space-evenly' spacing={6} paddingTop={6}>
          <VStack>
            <Text color='primary.500'>
              <FaPhone size='2rem' />
            </Text>
            <Text>Phone:&nbsp;+36-30-111-2222</Text>
          </VStack>

          <VStack>
            <Text color='primary.500'>
              <FaEnvelope size='2rem' />
            </Text>
            <Text>Email:&nbsp;varian.help@gmail.com</Text>
          </VStack>

        </VStack>
      </UniformGrid>
    </>
  );
};
