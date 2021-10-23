import {Container, Flex, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Image} from '@chakra-ui/react';
import ContactPageImage from './contact_page_image.bmp';
import {FaEnvelope, FaPhone} from 'react-icons/all';
import UniformGrid from '../../components/UniformGrid';

export default function Contact(): ReactElement {
  return (
    <>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.</Text>

      <VStack>
        <br />
        <br />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te</Text>
        <Text fontWeight={'bold'}> Lorem ipsum dolor sit amet, consectetur </Text>
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
