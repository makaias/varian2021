import {Text} from '@chakra-ui/layout';
import React, {FC, useState} from 'react';
import useEndpoint from '../hooks/useEndpoint';
import Spinner from '../components/Spinner';
import FailureParagraph from '../components/FailureParagraph';
import {Table, Tbody, Td, Tr, VStack} from '@chakra-ui/react';
import {User} from '../context/AuthBackend';
import {FaEnvelope} from 'react-icons/all';
import SubmitDocumentsModal from '../components/submitDocument/SubmitDocumentsModal';


const DoctorProfile: FC = () => {
  const [patientIdToSubmitDocumentTo, setPatientIdToSubmitDocumentTo] = useState<number>(null);
  const [patientNameToSubmitDocumentTo, setPatientNameToSubmitDocumentTo] = useState<string>('');

  const usedEndpoint = useEndpoint<User[]>({
    conf: {
      url: `/doctors/patients`
    }
  });

  return (
    <>
      <VStack p={3}>
        <Text fontSize='3xl' color='primary.500'>Patients</Text>

        <br />
        <br />
        {usedEndpoint.pending && (
          <Spinner />
        )}
        {usedEndpoint.failed && (
          <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />
        )}

        {usedEndpoint.succeeded && (
          <Table variant='simple'>
            <Tbody>
              {usedEndpoint.data.map(patient => (
                <Tr key={patient.id}>
                  <Td>{patient.firstname + ' ' + patient.surename}</Td>
                  <Td>{patient['statistic']?.badges?.map(b => b.type)?.join(' ')}</Td>
                  <Td>
                    <Text color='primary.500'>
                      <FaEnvelope size='1.5rem' cursor='pointer'
                                  onClick={() => {
                                    setPatientIdToSubmitDocumentTo(patient.id);
                                    setPatientNameToSubmitDocumentTo(patient.firstname + ' ' + patient.surename);
                                  }} />
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </VStack>
      <SubmitDocumentsModal patientId={patientIdToSubmitDocumentTo} patientName={patientNameToSubmitDocumentTo}
                            isOpen={!!patientIdToSubmitDocumentTo}
                            onClose={() => setPatientIdToSubmitDocumentTo(null)} />
    </>
  );
};

export default DoctorProfile;
