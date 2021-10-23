import {VStack} from '@chakra-ui/layout';
import {Spinner} from '@chakra-ui/react';
import React, {FC, useState} from 'react';
import FailureParagraph from '../../components/FailureParagraph';
import useEndpoint from '../../hooks/useEndpoint';
import {useLayoutConfig} from '../../app/layout';
import {UserDocument} from '../../model/UserDocument';
import UserDocumentList from '../../components/document/UserDocumentList';
import AllUserQueryingUserSelector from '../../components/selector/AllUserQueryingUserSelector';
import {isValidNonNegativeNumber} from '../../util/CommonValidators';

const DoctorDocuments: FC = () => {
  useLayoutConfig({title: 'My Documents', bg: 'fancy'});

  const [selectedUserId, setSelectedUserId] = useState(null);

  const usedEndpoint = useEndpoint<UserDocument[]>({
    conf: {
      url: `/documents?patient=${selectedUserId}&_sort=created:DESC`
    },
    enableRequest: isValidNonNegativeNumber(selectedUserId),
    deps: [selectedUserId]
  });

  return (
    <VStack w='100%' align='stretch' pt={2} maxWidth='container.xl'>

      <AllUserQueryingUserSelector userId={selectedUserId} setUserId={setSelectedUserId} />

      {usedEndpoint.pending && <Spinner />}
      {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

      {usedEndpoint.succeeded && (
        <UserDocumentList documents={usedEndpoint.data} />
      )}
    </VStack>
  );
};

export default DoctorDocuments;
