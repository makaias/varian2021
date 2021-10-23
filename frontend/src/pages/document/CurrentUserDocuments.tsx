import {VStack} from '@chakra-ui/layout';
import {Spinner} from '@chakra-ui/react';
import {FC} from 'react';
import FailureParagraph from '../../components/FailureParagraph';
import useEndpoint from '../../hooks/useEndpoint';
import {useLayoutConfig} from '../../app/layout';
import {UserDocument} from '../../model/UserDocument';
import UserDocumentList from '../../components/document/UserDocumentList';

const CurrentUserDocuments: FC = () => {
  useLayoutConfig({title: 'My Documents', bg: 'fancy'});

  const usedEndpoint = useEndpoint<UserDocument[]>({
    conf: {
      url: `/documents`//TODO: only query current user's documents, there is an endpoint for it
    }
  });

  return (
    <VStack w='100%' align='stretch' pt={2} maxWidth='container.xl'>
      {usedEndpoint.pending && <Spinner />}
      {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

      {usedEndpoint.succeeded && (
        <UserDocumentList documents={usedEndpoint.data} />
      )}
    </VStack>
  );
};

export default CurrentUserDocuments;
