import {Button} from '@chakra-ui/button';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/input';
import {Box, Flex, HStack, LinkBox, LinkOverlay, Text} from '@chakra-ui/layout';
import React, {useState} from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import Spinner from '../Spinner';

interface Props {
  defaultKeyword: string;
  itemCount: number;
}

export default function ScholarBlock({defaultKeyword: defaultKeyword, itemCount}: Props) {
  const [keyword, setKeyword] = useState<string>(defaultKeyword);

  const usedEndpoint = useEndpoint({
    conf: {
      url: `/scholar/${keyword}?num=${itemCount}`,
    },
    deps: [itemCount],
  });

  const results = usedEndpoint.data;
  const handleClick = () => usedEndpoint.reloadEndpoint();
  return (
    <>
      {usedEndpoint.pending && (
        <Flex justify="center">
          <Spinner></Spinner>
        </Flex>
      )}
      {usedEndpoint.failed && <p>Failed</p>}
      {usedEndpoint.succeeded && (
        <>
          <HStack justify="center">
            <InputGroup width="md" margin="1rem">
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                backgroundColor="white"
                variant="outline"
                placeholder="Search..."
                borderColor="primary.500"
                color="primary.500"
              />
              <InputRightElement width="2rem">
                <Button backgroundColor="primary.500" color="white" size="md" onClick={handleClick}>
                  GO
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
          {results['organic_results'].map((x, index) => (
            <>
              <Box key={index} margin="1rem" padding="1rem" borderTop="1px" borderTopColor="primary.500">
                <LinkBox>
                  <Text fontSize="xl" fontWeight="bold" color="primary.500">
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
