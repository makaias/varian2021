import {Container, VStack} from '@chakra-ui/layout';
import React, {FC, useState} from 'react';
import {RichTextEditor} from '../../components/rte/RichTextEditor';
import {Button} from '@chakra-ui/react';
import {useAuthBackend} from '../../context/AuthBackend';
import callJsonEndpoint from '../../util/api/callJsonEndpoint';
import {Input} from '@chakra-ui/input';
import {useHistory} from 'react-router';


const OneArticleCreator: FC = () => {
  const history = useHistory();

  const authBackend = useAuthBackend();
  if (!authBackend.isDoctor) {
    return null;
  }

  const [title, setTitle] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [headlineImageUrl, setHeadlineImageUrl] = useState<string>('');
  const [description, setDescription] = useState<string>(null);


  function doSaveArticle() {
    callJsonEndpoint({
      conf: {
        url: '/articles',
        method: 'POST',
        data: {
          title: title,
          headline: headline,
          headlineImageUrl: headlineImageUrl,
          description: description
        }
      }
    })
      .then((resp) => {
        history.push(`/articles/read/${resp.data['id']}`);
      })
      .catch(err => {
        alert('Error while saving article :/');
      });
  }

  return (
    <Container pt={8} maxWidth='container.xl'>
      <VStack align='stretch' spacing={6}>

        <Input fontSize='4xl' placeholder='Enter your title here' value={title}
               onChange={e => setTitle(e.target.value)} />

        <Input fontWeight={'bold'} placeholder='Enter your headline here' value={headline}
               onChange={e => setHeadline(e.target.value)} />


        <Input placeholder='https://Enter your headline image URL here' value={headlineImageUrl}
               onChange={e => setHeadlineImageUrl(e.target.value)} />

        <RichTextEditor value={description} setValue={(newValue => setDescription(JSON.stringify(newValue)))}
                        readOnly={false} />


        <Button onClick={() => doSaveArticle()}>Save article</Button>
      </VStack>
    </Container>
  );
};

export default OneArticleCreator;
