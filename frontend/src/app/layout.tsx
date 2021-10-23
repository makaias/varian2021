import {Box, Container, Flex, HStack, Image, Text, VStack} from '@chakra-ui/react';
import React, {PropsWithChildren, ReactElement, ReactNode, useContext, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ExitIcon, UserIcon} from '../components/icons';
import {useAuthBackend} from '../context/AuthBackend';
import logo from './logo.svg';

export interface LayoutConfig {
  title?: string;
  bg: 'plain' | 'fancy';
}

const LayoutContext = React.createContext<(config: LayoutConfig) => void | null>(null);

export function useLayoutConfig(config: LayoutConfig) {
  const [configState] = useState(config);

  const callback = useContext(LayoutContext);
  useEffect(() => {
    callback(configState);
    return () => callback(null);
  }, [configState]);
}

const defaultLayoutConfig: LayoutConfig = {bg: 'plain'};

export default function Layout({children}: PropsWithChildren<{}>): ReactElement {
  const {user, logout} = useAuthBackend();
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
            <HStack align="stretch" fontSize="xl" justify="space-between">
              <NavItem to="/dashboard">
                <HStack align="center">
                  <UserIcon width="2em" />
                  <Text>Profile</Text>
                </HStack>
              </NavItem>

              <NavItem to="/results">Results</NavItem>
              <NavItem to="/survey">Surveys</NavItem>
              <NavItem to="/symptoms">Symptoms</NavItem>
              <NavItem to="/publications">Publications</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavItem onClick={() => logout()}>
                <ExitIcon width="2em" />
              </NavItem>
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

interface NavItemProps {
  to?: string;
  children: ReactNode;
  onClick?: () => void;
}

function NavItem({children, to, onClick}: NavItemProps) {
  const location = useLocation();
  const active = location?.pathname?.startsWith(to);

  return (
    <Flex
      as={Link}
      to={to}
      onClick={onClick}
      p={2}
      fontWeight={active ? 'bold' : 'normal'}
      align="center"
      justify="center"
      _hover={{bg: 'gray.100'}}
    >
      {children}
    </Flex>
  );
}
