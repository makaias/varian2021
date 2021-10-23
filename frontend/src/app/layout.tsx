import {Box, Container, Flex, HStack, Image, Text, VStack} from '@chakra-ui/react';
import {faSignOutAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {PropsWithChildren, ReactElement, useContext, useEffect, useState} from 'react';
import {useAuthBackend} from '../context/AuthBackend';
import logo from './logo.svg';

export interface LayoutConfig {
  title?: string;
  bg: 'plain' | 'fancy';
}

const LayoutContext = React.createContext<(config: LayoutConfig) => void | null>(null);

export function useLayoutConfig(config: LayoutConfig) {
  const callback = useContext(LayoutContext);
  useEffect(() => {
    callback(config);
    return () => callback(null);
  }, [config]);
}

const defaultLayoutConfig: LayoutConfig = {bg: 'plain'};

export default function Layout({children}: PropsWithChildren<{}>): ReactElement {
  const {user} = useAuthBackend();
  const [_layoutConfig, setLayoutConfig] = useState(null);
  const layoutConfig = _layoutConfig || defaultLayoutConfig;

  useEffect(() => {
    document.getElementsByTagName('HTML')[0].classList.add(`layout-${layoutConfig.bg}`);

    return () => {
      document.getElementsByTagName('HTML')[0].classList.remove(`layout-${layoutConfig.bg}`);
    };
  }, [layoutConfig]);

  return (
    <VStack align="stretch">
      <Box bg="white" p={3}>
        <Container maxWidth="container.lg">
          {!user && (
            <HStack justify="center">
              <Image height="5rem" src={logo} />
            </HStack>
          )}
          {user && (
            <HStack p={2} align="center" fontSize="xl" justify="space-between">
              <HStack align="flex-end">
                <Flex fontSize="4xl" color="primary.500">
                  <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                </Flex>
                <Text fontWeight="bold">Profile</Text>
              </HStack>
              <Text>Results</Text>
              <Text>Surveys</Text>
              <Text>Symptoms</Text>
              <Text>Publications</Text>
              <Text fontWeight="bold">Contact</Text>
              <Flex fontSize="4xl" color="primary.500">
                <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
              </Flex>
            </HStack>
          )}
        </Container>
      </Box>
      {layoutConfig.title && (
        <Box bg="primary.400" color="white" p={1} textAlign="center" fontSize="2xl" fontWeight="bold">
          {layoutConfig.title}
        </Box>
      )}
      <Box>
        <Container maxWidth="container.lg">
          <LayoutContext.Provider value={setLayoutConfig}>{children}</LayoutContext.Provider>
        </Container>
      </Box>
    </VStack>
  );
}
