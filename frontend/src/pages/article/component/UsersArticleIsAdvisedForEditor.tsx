import {Box, Container, HStack, Text} from '@chakra-ui/layout';
import React, {FC, useState} from 'react';
import useEndpoint from '../../../hooks/useEndpoint';
import Spinner from '../../../components/Spinner';
import FailureParagraph from '../../../components/FailureParagraph';
import {Button, Table, Tbody, Td, Tr} from '@chakra-ui/react';
import {User} from '../../../context/AuthBackend';
import UserSelector from '../../../components/selector/UserSelector';
import callJsonEndpoint from '../../../util/api/callJsonEndpoint';
import AllUserQueryingUserSelector from '../../../components/selector/AllUserQueryingUserSelector';
import {useLayoutConfig} from '../../../app/layout';

interface Props {
  articleId: number;
}

const UsersArticleIsAdvisedForEditor: FC<Props> = (props) => {
  useLayoutConfig({title: 'Edit article', bg: 'plain'});
  const [selectedUserIdToAdviseFor, setSelectedUserIdToAdviseFor] = useState(null);

  const usedAdvisedUsers = useEndpoint<User[]>({
    conf: {
      url: `/doctors/list-users-article-is-advised-for/${props.articleId}`,
    },
    deps: [props.articleId],
  });

  function doAdvise() {
    callJsonEndpoint({
      conf: {
        url: `/doctors/advise-article/${selectedUserIdToAdviseFor}/${props.articleId}`,
        method: 'post',
      },
    })
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch((err) => {
        alert('Error while advising article :/');
      });
  }

  function doUnadvise(userId: number) {
    callJsonEndpoint({
      conf: {
        url: `/doctors/un-advise-article/${userId}/${props.articleId}`,
        method: 'post',
      },
    })
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch((err) => {
        alert('Error while unadvising article :/');
      });
  }

  return (
    <>
      <Container pt={8} maxWidth="container.xl">
        <Text fontSize="xl" align="center">
          Users this article is advised for
        </Text>

        {usedAdvisedUsers.pending && <Spinner />}
        {usedAdvisedUsers.failed && <FailureParagraph onRetry={usedAdvisedUsers.reloadEndpoint} />}
        {usedAdvisedUsers.succeeded && (
          <>
            <Table variant="simple">
              <Tbody>
                {usedAdvisedUsers.data.map((patient) => (
                  <Tr key={patient.id} borderTop="1px" borderColor="primary.500">
                    <Td>{patient.firstname + ' ' + patient.surename}</Td>
                    <Td>
                      <Button colorScheme="primary" onClick={() => doUnadvise(patient.id)}>
                        Unadvise
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <HStack justify="center">
              <Box maxWidth="100%" width="25rem">
                <AllUserQueryingUserSelector
                  userId={selectedUserIdToAdviseFor}
                  setUserId={setSelectedUserIdToAdviseFor}
                />
              </Box>
              <Button colorScheme="primary" onClick={() => doAdvise()}>
                Advise
              </Button>
            </HStack>
          </>
        )}
      </Container>
      <br />
    </>
  );
};

export default UsersArticleIsAdvisedForEditor;
