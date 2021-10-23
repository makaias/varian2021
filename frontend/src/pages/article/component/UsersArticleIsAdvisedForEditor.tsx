import {Container, Text} from '@chakra-ui/layout';
import React, {FC, useState} from 'react';
import useEndpoint from '../../../hooks/useEndpoint';
import Spinner from '../../../components/Spinner';
import FailureParagraph from '../../../components/FailureParagraph';
import {Button, Table, Tbody, Td, Tr} from '@chakra-ui/react';
import {User} from '../../../context/AuthBackend';
import UserSelector from '../../../components/selector/UserSelector';
import callJsonEndpoint from '../../../util/api/callJsonEndpoint';
import AllUserQueryingUserSelector from '../../../components/selector/AllUserQueryingUserSelector';

interface Props {
  articleId: number;
}

const UsersArticleIsAdvisedForEditor: FC<Props> = (props) => {
  const [selectedUserIdToAdviseFor, setSelectedUserIdToAdviseFor] = useState(null);

  const usedAdvisedUsers = useEndpoint<User[]>({
    conf: {
      url: `/doctors/list-users-article-is-advised-for/${props.articleId}`
    },
    deps: [props.articleId]
  });

  function doAdvise() {
    callJsonEndpoint({
      conf: {
        url: `/doctors/advise-article/${selectedUserIdToAdviseFor}/${props.articleId}`,
        method: 'post'
      }
    })
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch(err => {
        alert('Error while advising article :/');
      });
  }

  function doUnadvise(userId: number) {
    callJsonEndpoint({
      conf: {
        url: `/doctors/un-advise-article/${userId}/${props.articleId}`,
        method: 'post'
      }
    })
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch(err => {
        alert('Error while unadvising article :/');
      });
  }

  return (
    <Container pt={8} maxWidth='container.xl'>
      <Text fontSize='3xl'>
        Users this article is advised for
      </Text>

      {usedAdvisedUsers.pending && (
        <Spinner />
      )}
      {usedAdvisedUsers.failed && (
        <FailureParagraph onRetry={usedAdvisedUsers.reloadEndpoint} />
      )}
      {usedAdvisedUsers.succeeded && (
        <Table variant='simple'>
          <Tbody>
            {usedAdvisedUsers.data.map(patient => (
              <Tr key={patient.id}>
                <Td>{patient.firstname + ' ' + patient.surename}</Td>
                <Td>
                  <Button onClick={() => doUnadvise(patient.id)}>Unadvise</Button>
                </Td>
              </Tr>
            ))}
            <Tr>
              <Td>
                <AllUserQueryingUserSelector userId={selectedUserIdToAdviseFor}
                                             setUserId={setSelectedUserIdToAdviseFor} />
              </Td>
              <Td>
                <Button onClick={() => doAdvise()}>Advise</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      )}

    </Container>
  );
};

export default UsersArticleIsAdvisedForEditor;
