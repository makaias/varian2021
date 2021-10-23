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
      url: '/documents/me',
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
