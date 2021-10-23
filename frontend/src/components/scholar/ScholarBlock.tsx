import {Box, HStack, LinkBox, LinkOverlay, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement, useMemo} from 'react';
import * as scholar from 'google-scholar';
import useEndpoint from '../../hooks/useEndpoint';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/input';
import {Button} from '@chakra-ui/button';

interface Props {
  keyword: string;
  itemCount: number;
}

export default function ScholarBlock({keyword, itemCount}: Props) {
  const usedEndpoint = useEndpoint({
    conf: {
      url: `/scholar/${keyword}?num=${itemCount}`,
    },
    deps: [keyword, itemCount],
  });
  const results = usedEndpoint.data;
  const handleClick = () => usedEndpoint.reloadEndpoint();
  return (
    <>
      {usedEndpoint.pending && <p>Pending...</p>}
      {usedEndpoint.failed && <p>Failed</p>}
      {usedEndpoint.succeeded && (
        <>
          <Text padding="1rem" fontSize="5xl">
            Look for publications
          </Text>
          <HStack flex="start">
            <InputGroup width="md" margin="1rem">
              <Input backgroundColor="white" variant="outline" placeholder="Search..." borderColor="primary.500" color="primary.500" />
              <InputRightElement width="2rem">
                <Button backgroundColor="primary.500" color="white" size="sm" marginRight="1rem" onClick={handleClick}>
                  GO
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
          {results['organic_results'].map((x, index) => (
            <>
              <Box key={index} margin="1rem" padding="1rem" borderTop="1px" borderTopColor="primary.500">
                <LinkBox>
                  <Text fontSize="xl" fontWeight="bold">
                    {x.title}
                  </Text>
                  <Text>{x.snippet}</Text>
                  <Text fontStyle="italic">{x.publication_info?.summary}</Text>
                  <LinkOverlay href={x.link} target="_blank"></LinkOverlay>
                </LinkBox>
              </Box>
            </>
          ))}
        </>
      )}
    </>
  );
}
