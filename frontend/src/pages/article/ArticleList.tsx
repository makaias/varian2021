import {Button} from '@chakra-ui/button';
import {Box, HStack, Text, VStack} from '@chakra-ui/layout';
import {Spinner} from '@chakra-ui/react';
import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {useLayoutConfig} from '../../app/layout';
import FailureParagraph from '../../components/FailureParagraph';
import {BookIcon} from '../../components/icons';
import {useAuthBackend} from '../../context/AuthBackend';
import useEndpoint from '../../hooks/useEndpoint';
import {Article} from '../../model/Article';

const ArticleList: FC = () => {
  useLayoutConfig({title: 'Reading', bg: 'plain'});

  const authBackend = useAuthBackend();

  const usedEndpoint = useEndpoint<Article[]>({
    conf: {
      url: authBackend.isDoctor ? '/articles' : '/patients/articles',
    },
    deps: [authBackend.isDoctor],
  });

  return (
    <VStack w="100%" align="stretch" pt={2} maxWidth="container.xl">
      <Text fontSize="2xl">
        {authBackend.isDoctor ? (
          <></>
        ) : (
          <>Medically approved Articles hand-picked for you by your doctor</>
        )}
      </Text>

      {authBackend.isDoctor && (
        <NavLink to={'/articles/new'}>
          <Button colorScheme="primary">Create new Article</Button>
        </NavLink>
      )}

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
    <NavLink to={`/articles/read/${article.id}`}>
      <Box p={3} bg="white" borderTop="1px" borderColor="primary.500" cursor="pointer">
        <HStack justify="space-between" align="center" spacing={6} height="fit-content" w="100%">
          <VStack spacing={0} align="flex-start">
            <Text color="primary.500" fontSize="xl" fontWeight="bold">
              {article.title}
            </Text>
            <Text>{article.headline}</Text>
          </VStack>
          <BookIcon width="3rem" />
        </HStack>
      </Box>
    </NavLink>
  );
}

export default ArticleList;
