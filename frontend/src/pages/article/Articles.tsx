import {Container, Text, VStack} from '@chakra-ui/layout';
import React, {FC} from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import {Article} from '../../model/Article';
import Spinner from '../../components/Spinner';
import FailureParagraph from '../../components/FailureParagraph';
import {rteExampleValue} from '../../mocking/rte';
import {Box, Button, HStack} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';

interface Props {
  id: number;
}

const OneArticle: FC<Props> = (props) => {
  const usedEndpoint = useEndpoint<Article[]>({
    conf: {
      url: `/articles`
    },
    deps: [props.id],
    mockConfig: {
      shouldMock: true,
      mockData: [//TODO: use actual data
        {
          id: 1,
          title: 'Article title 1',
          headline: 'Article headline 1',
          headlineImageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          description: JSON.stringify(rteExampleValue)
        },
        {
          id: 2,
          title: 'Article title 2',
          headline: 'Article headline interesting stuff to get your attention 2',
          headlineImageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          description: JSON.stringify(rteExampleValue)
        },
        {
          id: 3,
          title: 'Article title 3',
          headline: 'Article headline 3',
          headlineImageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          description: JSON.stringify(rteExampleValue)
        }
      ]
    }
  });

  return (
    <Container pt={8} maxWidth='container.xl'>
      <Text fontSize='7xl'>Articles</Text>

      {usedEndpoint.pending && (
        <Spinner />
      )}
      {usedEndpoint.failed && (
        <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />
      )}

      {usedEndpoint.succeeded && (
        <VStack align='stretch' spacing={6}>
          {usedEndpoint.data.map(article => (
            <NavLink to={`/articles/${article.id}`}>
              <Box backgroundColor={'lightgrey'} p={6} cursor='pointer'>
                <HStack align='stretch' spacing={6}>
                  <VStack spacing={0}>
                    <Text fontSize='3xl'>{article.title}</Text>
                    <Text>{article.headline}</Text>
                    <Button>Read more{' >>'}</Button>
                  </VStack>
                  <Container maxHeight='container.sm' textAlign={'right'}>
                    <img src={article.headlineImageUrl} alt={article.title} style={{height: 100}} />
                  </Container>
                </HStack>
              </Box>
            </NavLink>
          ))}
        </VStack>
      )}


    </Container>
  );
};

export default OneArticle;
