import {Box, Text, VStack} from '@chakra-ui/layout';
import {FC} from 'react';
import {UserDocument} from '../../model/UserDocument';
import {RichTextEditor} from '../rte/RichTextEditor';

interface Props {
  documents: UserDocument[];
}

const UserDocumentList: FC<Props> = (props) => {
  return (
    <VStack w='100%' align='stretch' pt={2} maxWidth='container.xl'>
      <VStack align='stretch' spacing={6}>
        {props.documents.map((document) => (
          <div key={document.id}>
            <hr />
            <DocumentItem document={document} />
          </div>
        ))}
      </VStack>
    </VStack>
  );
};

function DocumentItem({document}: {document: UserDocument}) {
  return (
    <>
      <Box p={3} bg='white' borderRadius={6} border='2px solid' borderColor='primary.500'>
        <VStack spacing={0} align='flex-start'>
          <Text color='primary.500' fontSize='xl'>
            <b>{new Date(document.created_at).toString()}</b>
          </Text>
          <RichTextEditor readOnly={true} value={document.content} />
        </VStack>
      </Box>
    </>
  );
}

export default UserDocumentList;
