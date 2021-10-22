import { AspectRatio, Container, Flex, Text, VStack } from "@chakra-ui/layout";
import React, { PropsWithChildren, ReactElement } from "react";
import UniformGrid from "../components/UniformGrid";

interface Props {}

function HomeTile({ children }: PropsWithChildren<{}>) {
  return (
    <Flex
      p={6}
      bg="primary.400"
      color="white"
      align="center"
      justify="center"
      cursor="pointer"
    >
      <AspectRatio ratio={16 / 9} width="100%">
        <Flex>
          <Text fontSize="3xl" color="white" fontWeight="bold">
            {children}
          </Text>
        </Flex>
      </AspectRatio>
    </Flex>
  );
}

export default function Home({}: Props): ReactElement {
  return (
    <Container pt={8} maxWidth="container.sm">
      <VStack align="stretch" spacing={6}>
        <VStack spacing={0}>
          <Text>Click to the right square to enter your page.</Text>
          <Text>
            If you have difficulty to use the page, ask help from someone.
          </Text>
        </VStack>
        <UniformGrid columns={[1, 1, 2]} gap={4}>
          <HomeTile>For Doctors</HomeTile>
          <HomeTile>For Patients</HomeTile>
        </UniformGrid>
      </VStack>
    </Container>
  );
}
