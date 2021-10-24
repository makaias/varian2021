import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  useBoolean,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {PropsWithChildren, ReactElement, ReactNode, useContext, useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {ExitIcon} from '../components/icons';
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
  const {user, logout, isLoggedIn} = useAuthBackend();
  const [_layoutConfig, setLayoutConfig] = useState(null);
  const layoutConfig = _layoutConfig || defaultLayoutConfig;

  useEffect(() => {
    document.getElementsByTagName('HTML')[0].classList.add(`layout-${layoutConfig.bg}`);

    return () => {
      document.getElementsByTagName('HTML')[0].classList.remove(`layout-${layoutConfig.bg}`);
    };
  }, [layoutConfig]);

  const [menuIsOpen, toggleMenu] = useBoolean(false);
  const [isDesktopWidth] = useMediaQuery('(min-width: 48em)');

  return (
    <VStack align="stretch" spacing={0}>
      <Box bg="white" p={3}>
        <Container maxWidth="container.lg">
          {!user && (
            <NavLink to="/profile">
              <HStack justify="center">
                <Image height="5rem" src={logo} />
              </HStack>
            </NavLink>
          )}
          {user && (
            <>
              {!isDesktopWidth && (
                <Flex justify="flex-end">
                  <Button onClick={() => toggleMenu.toggle()} variant="unstyled">
                    <FontAwesomeIcon icon={faBars} />
                  </Button>
                </Flex>
              )}
              <Collapse in={menuIsOpen || isDesktopWidth}>
                <Stack direction={isDesktopWidth ? 'row' : 'column'} justify="space-between" align="stretch">
                  <NavLink to="/profile">
                    <Image height="3rem" src={logo} />
                  </NavLink>
                  <NavItem to="/profile">
                    {isLoggedIn ? (
                      <>
                        {user.firstname}&nbsp;{user.surename}{' '}
                      </>
                    ) : (
                      'Profile'
                    )}
                  </NavItem>

                  <NavItem to="/results">Results</NavItem>
                  <NavItem to="/surveys">Surveys</NavItem>
                  <NavItem to="/symptoms">Symptoms</NavItem>
                  <NavItem to="/articles">Articles</NavItem>
                  <NavItem to="/myDocuments">Documents</NavItem>
                  <NavItem to="/scholar">Publications</NavItem>
                  <NavItem to="/contact">Contact</NavItem>
                  <NavItem onClick={() => logout()}>
                    <ExitIcon width="2em" />
                  </NavItem>
                </Stack>
              </Collapse>
            </>
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
  p?: number;
}

function NavItem({children, to, onClick, p = 2}: NavItemProps) {
  let location = null;
  try {
    location = useLocation();
  } catch {
    // ignore
  }
  const active = location?.pathname?.startsWith(to);

  if (to)
    return (
      <Flex
        as={Link}
        to={to}
        onClick={onClick}
        p={p}
        fontWeight={active ? 'bold' : 'normal'}
        align="center"
        justify="center"
        _hover={{bg: 'gray.100'}}
      >
        {children}
      </Flex>
    );
  return (
    <Flex
      as="div"
      onClick={onClick}
      p={p}
      fontWeight={active ? 'bold' : 'normal'}
      align="center"
      justify="center"
      _hover={{bg: 'gray.100'}}
    >
      {children}
    </Flex>
  );
}
