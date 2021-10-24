import {Box, Container, Text, VStack} from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image';
import React, {FC, useState} from 'react';
import {RichTextEditor} from '../../components/rte/RichTextEditor';
import useEndpoint from '../../hooks/useEndpoint';
import {Article} from '../../model/Article';
import Spinner from '../../components/Spinner';
import FailureParagraph from '../../components/FailureParagraph';
import {Button, HStack} from '@chakra-ui/react';
import {useAuthBackend} from '../../context/AuthBackend';
import MyEditable from '../../components/MyEditable';
import callJsonEndpoint from '../../util/api/callJsonEndpoint';
import UsersArticleIsAdvisedForEditor from './component/UsersArticleIsAdvisedForEditor';
import {isValidNonEmptyString} from '../../util/CommonValidators';

interface Props {
  id: number;
}

const OneArticle: FC<Props> = (props) => {
  const authBackend = useAuthBackend();

  const [isEdited, setIsEdited] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [headlineImageUrl, setHeadlineImageUrl] = useState<string>('');
  const [description, setDescription] = useState<string>(null);

  function setStateFromArticle(article: Article) {
    setTitle(article.title);
    setHeadline(article.headline);
    setHeadlineImageUrl(article.headlineImageUrl);
    setDescription(article.description);
  }

  const usedEndpoint = useEndpoint<Article>({
    conf: {
      url: `/articles/${props.id}`,
    },
    deps: [props.id],
    onSuccess: (resp) => {
      const article = resp.data;
      setStateFromArticle(article);
    },
  });

  function doSaveArticle() {
    callJsonEndpoint({
      conf: {
        url: `/articles/${usedEndpoint.data.id}`,
        method: 'PUT',
        params: {
          id: usedEndpoint.data.id,
        },
        data: {
          title: title,
          headline: headline,
          headlineImageUrl: headlineImageUrl,
          description: description,
        },
      },
    })
      .then(() => {
        setIsEdited(false);
        usedEndpoint.reloadEndpoint();
      })
      .catch((err) => {
        alert('Error while saving article :/');
      });
  }

  function doCancelEdit() {
    setIsEdited(false);
    setStateFromArticle(usedEndpoint.data);
  }

  return (
    <Container pt={8} maxWidth="container.xl">
      {usedEndpoint.pending && <Spinner />}
      {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}
      {usedEndpoint.succeeded && (
        <>
          <VStack align="stretch" paddingBottom="1rem">
            <HStack justify="space-between">
              <Text fontSize="4xl">
                <MyEditable value={title} onChange={setTitle} isEditable={isEdited} />
              </Text>
              {authBackend.isDoctor && !isEdited && (
                <>
                  <Button colorScheme="primary" onClick={() => setIsEdited(true)}>
                    Edit article
                  </Button>
                </>
              )}
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight={'bold'}>
                <MyEditable value={headline} onChange={setHeadline} isEditable={isEdited} />
              </Text>

              {isValidNonEmptyString(headlineImageUrl) && (
                <Box boxSize="5rem">
                  <Image src={headlineImageUrl} alt={title} />
                </Box>
              )}
            </HStack>
          </VStack>

          <RichTextEditor
            value={description}
            setValue={(newValue) => setDescription(JSON.stringify(newValue))}
            readOnly={!isEdited}
          />

          {isEdited && (
            <>
              <HStack>
                <Button colorScheme="primary" onClick={() => doSaveArticle()}>
                  Save article
                </Button>
                <Button colorScheme="primary" onClick={() => doCancelEdit()}>
                  Cancel edit
                </Button>
              </HStack>
            </>
          )}

          {authBackend.isDoctor && <UsersArticleIsAdvisedForEditor articleId={props.id} />}
        </>
      )}
    </Container>
  );
};

export default OneArticle;
