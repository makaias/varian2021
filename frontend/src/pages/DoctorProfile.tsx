import {Text} from '@chakra-ui/layout';
import React, {FC, useState} from 'react';
import useEndpoint from '../hooks/useEndpoint';
import Spinner from '../components/Spinner';
import FailureParagraph from '../components/FailureParagraph';
import {Table, Tbody, Td, Tr, VStack} from '@chakra-ui/react';
import {User} from '../context/AuthBackend';
import {FaEnvelope} from 'react-icons/all';
import SubmitDocumentsModal from '../components/submitDocument/SubmitDocumentsModal';
import {useLayoutConfig} from '../app/layout';

const getColor = (value) => {
  if (value < -3) {
    return 'red';
  }
  if (value < -1) {
    return 'yellow';
  }
  if (value < 1) {
    return 'white';
  }
  if (value < 3) {
    return 'blue';
  }
  if (value <= 5) {
    return 'green';
  }
  return 'black';
};

const DoctorProfile: FC = () => {
  useLayoutConfig({
    bg: 'plain',
    title: 'Patients',
  });
  const [patientIdToSubmitDocumentTo, setPatientIdToSubmitDocumentTo] = useState<number>(null);
  const [patientNameToSubmitDocumentTo, setPatientNameToSubmitDocumentTo] = useState<string>('');

  const usedEndpoint = useEndpoint<User[]>({
    conf: {
      url: `/doctors/patients`,
    },
  });

  return (
    <>
      <VStack p={3}>
        <br />
        <br />
        {usedEndpoint.pending && <Spinner />}
        {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

        {usedEndpoint.succeeded && (
          <Table variant="simple">
            <Tbody>
              {usedEndpoint.data.map((patient) => (
                <Tr
                  key={patient.id}
                  borderTop="1px"
                  borderTopColor="primary.500"
                  borderLeftWidth="5px"
                  borderLeftColor={getColor(patient['statistic']?.improvement)}
                >
                  <Td>{patient.firstname + ' ' + patient.surename}</Td>
                  <Td>{patient['statistic']?.badges?.map((b) => b.type)?.join(' ')}</Td>
                  <Td>
                    <Text color="primary.500">
                      <FaEnvelope
                        size="1.5rem"
                        cursor="pointer"
                        onClick={() => {
                          setPatientIdToSubmitDocumentTo(patient.id);
                          setPatientNameToSubmitDocumentTo(patient.firstname + ' ' + patient.surename);
                        }}
                      />
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </VStack>
      <SubmitDocumentsModal
        patientId={patientIdToSubmitDocumentTo}
        patientName={patientNameToSubmitDocumentTo}
        isOpen={!!patientIdToSubmitDocumentTo}
        onClose={() => setPatientIdToSubmitDocumentTo(null)}
      />
      <br />
    </>
  );
};

export default DoctorProfile;
