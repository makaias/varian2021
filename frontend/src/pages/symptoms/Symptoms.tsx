import {AspectRatio, Container, Flex, Text, VStack} from '@chakra-ui/layout';
import React, {PropsWithChildren, ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import UniformGrid from '../../components/UniformGrid';
import {useLayoutConfig} from '../../app/layout';

function SymptomTile({children, link}: PropsWithChildren<{link: string}>) {
  return (
    <NavLink to={`/symptoms/${link}`}>
      <Flex p={6} bg="primary.400" color="white" align="center" justify="center" cursor="pointer">
        <AspectRatio ratio={16 / 7} width="100%">
          <Flex>
            <Text color="white" fontWeight="bold">
              {children}
            </Text>
          </Flex>
        </AspectRatio>
      </Flex>
    </NavLink>
  );
}

export default function Symptoms(): ReactElement {
  useLayoutConfig({bg: 'fancy', title: 'Symptoms'});

  return (
    <>
      <Text fontSize="xl" margin="2rem" textAlign="center">
        Although the symptoms of these treatments may be scary, click on each module to read about them and to reduce
        the difficulties.
      </Text>
      <UniformGrid columns={[1, 2, 3]} gap={4}>
        <SymptomTile link="physical-activity">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Physical activity
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="healthy-eating">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Healthy eating
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="mental-health">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Mental health
            </Text>
          </VStack>
        </SymptomTile>
      </UniformGrid>
      <Text fontSize="xl" margin="2rem" textAlign="center">
        Although the symptoms of these treatments may be scary, click on each module to read about them and to reduce
        the difficulties.
      </Text>
      <UniformGrid columns={[1, 2, 3]} gap={4}>
        <SymptomTile link="inflammatory-skin">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Skin
            </Text>
            <Text align="center" fontSize="lg" fontWeight="normal">
              e.g. inflammatory skin
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="head-neck">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Head, neck
            </Text>
            <Text align="center" fontSize="lg" fontWeight="normal">
              e.g. hair loss, tooth decay
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="chest">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Chest
            </Text>
            <Text align="center" fontSize="lg" fontWeight="normal">
              e.g. cough, dyspnea
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="stomach">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Stomach
            </Text>
            <Text align="center" fontSize="lg" fontWeight="normal">
              e.g. vomiting, diarrhea
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="pelvis">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Pelvis
            </Text>
            <Text align="center" fontSize="lg" fontWeight="normal">
              e.g. inkontinence, menopausal symptoms
            </Text>
          </VStack>
        </SymptomTile>
        <SymptomTile link="other">
          <VStack spacing="4">
            <Text align="center" fontSize="3xl">
              Other
            </Text>
            <Text align="center" fontSize="lg" fontWeight="normal">
              e.g. fatigue
            </Text>
          </VStack>
        </SymptomTile>
      </UniformGrid>
      <br />
    </>
  );
}
