import { Box, Container, Text, VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import React, { PropsWithChildren, ReactElement } from "react";

export default function Layout({}: PropsWithChildren<{}>): ReactElement {
  const { user } = { user: null };

  return (
    <VStack align="stretch" bg="secondary.100">
      <Box bg="white" p={4}>
        <Container maxWidth="container.lg">
          <HStack justify="center">
            <Text fontSize="3xl">Varian</Text>
          </HStack>
        </Container>
      </Box>
    </VStack>
  );
}
