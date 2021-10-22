import { Box, Container, HStack, Image, VStack } from "@chakra-ui/react";
import React, { PropsWithChildren, ReactElement } from "react";
import logo from "./logo.svg";

export default function Layout({
  children,
}: PropsWithChildren<{}>): ReactElement {
  const { user } = { user: null };

  return (
    <VStack align="stretch" bg="secondary.100">
      <Box bg="white" p={3}>
        <Container maxWidth="container.lg">
          {!user && (
            <HStack justify="center">
              <Image height="5rem" src={logo} />
            </HStack>
          )}
        </Container>
      </Box>
      <Container maxWidth="container.lg">{children}</Container>
    </VStack>
  );
}
