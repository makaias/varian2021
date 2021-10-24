import {Flex, Table, Tbody, Td, Tr, VStack} from '@chakra-ui/react';
import React, {FC, useState} from 'react';
import {FaEnvelope} from 'react-icons/all';
import {useLayoutConfig} from '../app/layout';
import FailureParagraph from '../components/FailureParagraph';
import Spinner from '../components/Spinner';
import SubmitDocumentsModal from '../components/submitDocument/SubmitDocumentsModal';
import {User} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';

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
                    <Flex color="primary.500" justify="flex-end">
                      <FaEnvelope
                        size="1.5rem"
                        cursor="pointer"
                        onClick={() => {
                          setPatientIdToSubmitDocumentTo(patient.id);
                          setPatientNameToSubmitDocumentTo(patient.firstname + ' ' + patient.surename);
                        }}
                      />
                    </Flex>
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
