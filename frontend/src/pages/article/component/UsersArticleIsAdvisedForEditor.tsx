import {Container, Text} from '@chakra-ui/layout';
import React, {FC, useState} from 'react';
import useEndpoint from '../../../hooks/useEndpoint';
import Spinner from '../../../components/Spinner';
import FailureParagraph from '../../../components/FailureParagraph';
import {Button, Table, Tbody, Td, Tr} from '@chakra-ui/react';
import {User} from '../../../context/AuthBackend';
import UserSelector from '../../../components/UserSelector';

interface Props {
  articleId: number;
}

const UsersArticleIsAdvisedForEditor: FC<Props> = (props) => {
  const [selectedUserIdToAdviseFor, setSelectedUserIdToAdviseFor] = useState(null);

  const usedAdvisedUsers = useEndpoint<User[]>({
    conf: {
      url: `???????/${props.articleId}`
    },
    deps: [props.articleId],
    mockConfig: {
      shouldMock: true,
      mockData: [//TODO: use real data
        {
          id: 1,
          firstname: 'First',
          surename: 'Sure'
        } as User,
        {
          id: 2,
          firstname: 'First 2',
          surename: 'Sure 2'
        } as User
      ]
    }
  });

  const usedAllUsers = useEndpoint<User[]>({
    conf: {
      url: `/users`
    }
  });

  function doAdvise() {
    new Promise(resolve => resolve(''))//use props.articleId and selectedUserIdToAdviseFor //TODO: call backend
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch(err => {
        alert('Error while advising article :/');
      });
  }

  function doUnadvise(userId: number) {
    new Promise(resolve => resolve(''))//use props.articleId //TODO: call backend
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

      {usedAdvisedUsers.pending || usedAllUsers.pending && (
        <Spinner />
      )}
      {usedAdvisedUsers.failed || usedAllUsers.failed && (
        <FailureParagraph onRetry={() => {
          usedAdvisedUsers.reloadEndpoint();
          usedAllUsers.reloadEndpoint();
        }} />
      )}
      {usedAdvisedUsers.succeeded && usedAllUsers.succeeded && (
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
                <UserSelector options={usedAllUsers.data} userId={selectedUserIdToAdviseFor}
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
