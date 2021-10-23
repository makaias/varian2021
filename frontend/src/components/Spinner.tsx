import React, {FC} from 'react';
import {Spinner as ChakraSpinner} from '@chakra-ui/react';

const Spinner: FC = () => {
  return <ChakraSpinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="primary.500" size="xl" />;
};

export default Spinner;
