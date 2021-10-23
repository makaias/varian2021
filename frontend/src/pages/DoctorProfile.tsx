import {Text} from '@chakra-ui/layout';
import React, {FC} from 'react';
import useEndpoint from '../hooks/useEndpoint';
import Spinner from '../components/Spinner';
import FailureParagraph from '../components/FailureParagraph';
import {Table, Tbody, Td, Tr} from '@chakra-ui/react';
import {User} from '../context/AuthBackend';
import {FaEnvelope} from 'react-icons/all';


const DoctorProfile: FC = () => {
  const usedEndpoint = useEndpoint<User[]>({
    conf: {
      url: `/doctors/patients`
    }
  });

  return (
    <>
      {usedEndpoint.pending && (
        <Spinner />
      )}
      {usedEndpoint.failed && (
        <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />
      )}

      {usedEndpoint.succeeded && (
        <Table variant="simple">
          <Tbody>
            {usedEndpoint.data.map(patient => (
              <Tr key={patient.id}>
                <Td>{patient.firstname + ' ' + patient.surename}</Td>
                <Td>TODO: active</Td>
                <Td>TODO: breast</Td>
                <Td>
                  <Text color='primary.500'>
                    <FaEnvelope size='1.5rem' />
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default DoctorProfile;
