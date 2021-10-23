import React, {FC} from 'react';
import {VStack} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/button';

interface Props {
  onRetry?: () => void;
}

const FailureParagraph: FC<Props> = (props) => {
  return (
    <VStack>
      <p>We couldn't load the data :/</p>
      {props.onRetry && (
        <Button colorScheme="primary" onClick={() => props.onRetry()}>
          Retry
        </Button>
      )}
    </VStack>
  );
};

export default FailureParagraph;
