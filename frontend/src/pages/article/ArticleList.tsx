import {Box, Flex, HStack, Text, VStack} from '@chakra-ui/layout';
import {Spinner} from '@chakra-ui/react';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import FailureParagraph from '../../components/FailureParagraph';
import useEndpoint from '../../hooks/useEndpoint';
import {rteExampleValue} from '../../mocking/rte';
import {Article} from '../../model/Article';

interface Props {
  id: number;
}

const ArticleList: FC<Props> = (props) => {
  const usedEndpoint = useEndpoint<Article[]>({
    conf: {
      url: `/articles`,
    },
    deps: [props.id],
    mockConfig: {
      shouldMock: true,
      mockData: [
        //TODO: use actual data
        {
          id: 1,
          title: 'Article title 1',
          headline: 'Article headline 1',
          headlineImageUrl:
            'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          description: JSON.stringify(rteExampleValue),
        },
        {
          id: 2,
          title: 'Article title 2',
          headline: 'Article headline interesting stuff to get your attention 2',
          headlineImageUrl:
            'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          description: JSON.stringify(rteExampleValue),
        },
        {
          id: 3,
          title: 'Article title 3',
          headline: 'Article headline 3',
          headlineImageUrl:
            'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          description: JSON.stringify(rteExampleValue),
        },
      ],
    },
  });

  return (
    <VStack w="100%" align="stretch" pt={8} maxWidth="container.xl">
      {usedEndpoint.pending && <Spinner />}
      {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

      {usedEndpoint.succeeded && (
        <VStack align="stretch" spacing={6}>
          {usedEndpoint.data.map((article) => (
            <ArticleItem article={article} />
          ))}
        </VStack>
      )}
    </VStack>
  );
};

function ArticleItem({article}: {article: Article}) {
  return (
    <NavLink to={`/articles/${article.id}`}>
      <Box p={3} bg="white" borderRadius={6} border="2px solid" borderColor="primary.500" cursor="pointer">
        <HStack justify="space-between" align="center" spacing={6} height="fit-content" w="100%">
          <VStack spacing={0} align="flex-start">
            <Text color="primary.500" fontSize="xl">
              {article.title}
            </Text>
            <Text>{article.headline}</Text>
          </VStack>
          <Flex fontSize="4xl" color="primary.500" pr={4}>
            <FontAwesomeIcon icon={faBook} />
          </Flex>
        </HStack>
      </Box>
    </NavLink>
  );
}

export default ArticleList;
