import {Container, Text, VStack} from '@chakra-ui/layout';
import React, {FC} from 'react';
import {RichTextEditor} from '../../components/rte/RichTextEditor';
import useEndpoint from '../../hooks/useEndpoint';
import {Article} from '../../model/Article';
import Spinner from '../../components/Spinner';
import FailureParagraph from '../../components/FailureParagraph';
import {rteExampleValue} from '../../mocking/rte';
import {Button, HStack} from '@chakra-ui/react';

interface Props {
  id: number;
}

const OneArticle: FC<Props> = (props) => {
  const usedEndpoint = useEndpoint<Article>({
    conf: {
      url: `/articles/${props.id}`
    },
    deps: [props.id],
    mockConfig: {
      shouldMock: true,
      mockData: {//TODO: use actual data
        id: 1,
        title: 'Article title1',
        headline: 'Article headline  lorem ipsum Article title lorem ipsum Article title lorem ipsum Article title lorem ipsum Article title lorem ipsum 1',
        headlineImageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
        description: JSON.stringify(rteExampleValue)
      }
    }
  });

  return (
    <Container pt={8} maxWidth='container.xl'>
      {usedEndpoint.pending && (
        <Spinner />
      )}
      {usedEndpoint.failed && (
        <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />
      )}

      {usedEndpoint.succeeded && (
        <VStack align='stretch' spacing={6}>
          <Text fontSize='4xl'>{usedEndpoint.data.title}</Text>
          <HStack align='stretch' spacing={6}>
            <Text fontWeight={'bold'}>{usedEndpoint.data.headline}</Text>
            <Container maxHeight='container.sm' textAlign={'right'}>
              <img src={usedEndpoint.data.headlineImageUrl} alt={usedEndpoint.data.title} style={{height: 100}} />
            </Container>
          </HStack>

          <RichTextEditor value={usedEndpoint.data.description} readOnly={true} />
        </VStack>
      )}


    </Container>
  );
};

export default OneArticle;
