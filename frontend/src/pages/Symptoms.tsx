import {AspectRatio, Container, Flex, Text, VStack} from '@chakra-ui/layout';
import React, {PropsWithChildren, ReactElement} from 'react';
import UniformGrid from '../components/UniformGrid';

interface Props {}

function SymptomTile({children}: PropsWithChildren<{}>) {
  return (
    <Flex p={6} bg="primary.400" color="white" align="center" justify="center" cursor="pointer">
      <AspectRatio ratio={16 / 9} width="100%">
        <Flex>
          <Text color="white" fontWeight="bold">
            {children}
          </Text>
        </Flex>
      </AspectRatio>
    </Flex>
  );
}

export default function Symptoms(): ReactElement {
  return (
    <UniformGrid columns={[1, 2, 3]} gap={4}>
      <SymptomTile>
        <VStack spacing="4">
          <Text align="center" fontSize="3xl">
            Skin
          </Text>
          <Text align="center" fontSize="lg" fontWeight="normal">
            e.g. inflammatory skin
          </Text>
        </VStack>
      </SymptomTile>
      <SymptomTile>
        <VStack spacing="4">
          <Text align="center" fontSize="3xl">
            Face, neck
          </Text>
          <Text align="center" fontSize="lg" fontWeight="normal">
            e.g. hair loss, tooth decay
          </Text>
        </VStack>
      </SymptomTile>
      <SymptomTile>
        <VStack spacing="4">
          <Text align="center" fontSize="3xl">
            Chest
          </Text>
          <Text align="center" fontSize="lg" fontWeight="normal">
            e.g. pulmonary fibrosis, cough
          </Text>
        </VStack>
      </SymptomTile>
      <SymptomTile>
        <VStack spacing="4">
          <Text align="center" fontSize="3xl">
            Stomach
          </Text>
          <Text align="center" fontSize="lg" fontWeight="normal">
            e.g. vomiting, diarrhea
          </Text>
        </VStack>
      </SymptomTile>
      <SymptomTile>
        <VStack spacing="4">
          <Text align="center" fontSize="3xl">
            Pelvis
          </Text>
          <Text align="center" fontSize="lg" fontWeight="normal">
            e.g. rectal bleeding, inkontinence
          </Text>
        </VStack>
      </SymptomTile>
      <SymptomTile>
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
  );
}
