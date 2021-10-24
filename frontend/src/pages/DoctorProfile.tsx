import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Tr,
  useToast,
  VStack,
} from '@chakra-ui/react';
import {Form, Formik} from 'formik';
import React, {FC, useState} from 'react';
import {FaEnvelope, FaFile} from 'react-icons/all';
import {useHistory} from 'react-router-dom';
import {useLayoutConfig} from '../app/layout';
import FailureParagraph from '../components/FailureParagraph';
import FormikApiError from '../components/formik/FormikApiError';
import FormikButton from '../components/formik/FormikButton';
import FormikInput from '../components/formik/FormikInput';
import Spinner from '../components/Spinner';
import SubmitDocumentsModal from '../components/submitDocument/SubmitDocumentsModal';
import {User} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
import {TreatmentPlan} from '../model/TreatmentPlan';
import callJsonEndpoint from '../util/api/callJsonEndpoint';

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

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const usedEndpoint = useEndpoint<User[]>({
    conf: {
      url: `/doctors/patients`,
    },
  });
  const history = useHistory();
  const toast = useToast();

  const createTreatment = async (userId) => {
    try {
      const tp = await callJsonEndpoint<TreatmentPlan>({
        conf: {
          url: '/doctors/create-treatment-plan',
          method: 'POST',
          data: {user: userId},
        },
      });
      history.push(`/treatment-plan/${tp.data.id}`);
    } catch (err) {
      toast({
        title: 'Error',
        description: err.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {isCreateModalOpen && (
        <CreatePatientModal
          onClose={() => setIsCreateModalOpen(false)}
          onCreated={() => {
            setIsCreateModalOpen(false);
            usedEndpoint.reloadEndpoint();
          }}
        />
      )}
      <VStack p={3}>
        <br />
        <br />
        {usedEndpoint.pending && <Spinner />}
        {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

        {usedEndpoint.succeeded && (
          <>
            <Button onClick={() => setIsCreateModalOpen(true)}>Create patient</Button>
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
                      <HStack color="primary.500" justify="flex-end">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setPatientIdToSubmitDocumentTo(patient.id);
                            setPatientNameToSubmitDocumentTo(patient.firstname + ' ' + patient.surename);
                          }}
                        >
                          <FaEnvelope size="1.5rem" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            createTreatment(patient.id);
                          }}
                        >
                          <FaFile size="1.5rem" />
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
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

interface CreatePatientModalProps {
  onCreated: (patient: User) => void;
  onClose: () => void;
}
function CreatePatientModal({onCreated, onClose}: CreatePatientModalProps) {
  const registerUser = async (v: User) => {
    console.log('registering user', v);
    const response = await callJsonEndpoint<User>({
      conf: {
        url: 'doctors/create-user',
        method: 'POST',
        data: v,
      },
    });
    return response.data;
  };

  return (
    <Modal onClose={onClose} isOpen>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add patient</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={4}>
          <Formik
            initialValues={{complete: true}}
            onSubmit={async (v, formik) => {
              try {
                const user = await registerUser(v as any as User);
                onCreated(user);
              } catch (error) {
                formik.setFieldError('__api__', error.message);
              }
            }}
          >
            <VStack as={Form} align="stretch">
              <FormikApiError />
              <FormControl>
                <FormLabel>Userame</FormLabel>
                <FormikInput type="text" name="username" required />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <FormikInput type="email" name="email" required />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <FormikInput type="password" name="password" required />
              </FormControl>
              <FormControl>
                <FormLabel>Firstname</FormLabel>
                <FormikInput type="text" name="firstname" required />
              </FormControl>
              <FormControl>
                <FormLabel>Surname</FormLabel>
                <FormikInput type="text" name="surename" required />
              </FormControl>
              <FormControl>
                <FormLabel>Date of birth</FormLabel>
                <FormikInput type="date" name="date_of_birth" required />
              </FormControl>
              <HStack pt={4} justify="space-between">
                <Button onClick={() => onClose()}>Cancel</Button>
                <FormikButton type="submit">Register</FormikButton>
              </HStack>
            </VStack>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default DoctorProfile;
