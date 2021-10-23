import React, {FC} from 'react';
import {VStack} from '@chakra-ui/layout';

interface Props {
  onRetry?: () => void;
}

const FailureParagraph: FC<Props> = (props) => {
  return (
    <VStack>
      <p>We couldn't load the data :/</p>
      {props.onRetry && (
        <button onClick={() => props.onRetry()}>Retry</button>
      )}
    </VStack>
  );
};

export default FailureParagraph;