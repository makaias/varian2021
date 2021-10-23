import {Box, Flex, HStack, Text, VStack} from '@chakra-ui/layout';
import {Spinner} from '@chakra-ui/react';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import FailureParagraph from '../../components/FailureParagraph';
import useEndpoint from '../../hooks/useEndpoint';
import {Article} from '../../model/Article';
import {useAuthBackend} from '../../context/AuthBackend';
import {Button} from '@chakra-ui/button';
import {BookIcon} from '../../components/icons';

interface Props {
  id: number;
}

const ArticleList: FC<Props> = (props) => {
  const authBackend = useAuthBackend();

  const usedEndpoint = useEndpoint<Article[]>({
    conf: {
      url: `/articles`//TODO: IF userType === PATIENT then only list articles that are ADVISED for the user
    },
    deps: [props.id]
  });

  return (
    <VStack w='100%' align='stretch' pt={8} maxWidth='container.xl'>
      <Text color='primary.500' fontSize='3xl'>
        Medically approved Articles hand-picked by your doctor, based on your individual state
      </Text>

      {authBackend.isDoctor && (
        <NavLink to={'/articles/new'}>
          <Button color='primary.500'>Create new Article</Button>
        </NavLink>
      )}

      {usedEndpoint.pending && <Spinner />}
      {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

      {usedEndpoint.succeeded && (
        <VStack align='stretch' spacing={6}>
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
      <Box p={3} bg='white' borderRadius={6} border='2px solid' borderColor='primary.500' cursor='pointer'>
        <HStack justify='space-between' align='center' spacing={6} height='fit-content' w='100%'>
          <VStack spacing={0} align='flex-start'>
            <Text color='primary.500' fontSize='xl'>
              {article.title}
            </Text>
            <Text>{article.headline}</Text>
          </VStack>
          <BookIcon width='4.5rem' />
        </HStack>
      </Box>
    </NavLink>
  );
}

export default ArticleList;
