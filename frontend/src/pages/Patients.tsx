import {Button} from '@chakra-ui/button';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {HStack, Text, VStack} from '@chakra-ui/layout';
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from '@chakra-ui/modal';
import {Spinner} from '@chakra-ui/spinner';
import {Form, Formik} from 'formik';
import React, {ReactElement, useState} from 'react';
import {FaEnvelope, FaFile} from 'react-icons/fa';
import {useLayoutConfig} from '../app/layout';
import FormikButton from '../components/formik/FormikButton';
import FormikInput from '../components/formik/FormikInput';
import {User} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';

interface Props {}

export default function Patients({}: Props): ReactElement {
  useLayoutConfig({title: 'Patients', bg: 'plain'});

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(true);

  const usedEndpoint = useEndpoint<User[]>({
    conf: {
      url: '/doctors/patients',
      method: 'GET',
    },
    enableRequest: true,
  });

  return (
    <>
      {isCreateModalOpen && (
        <CreatePatientModal onClose={() => setIsCreateModalOpen(false)} onCreated={() => setIsCreateModalOpen(false)} />
      )}
      {usedEndpoint.pending && <Spinner />}

      {usedEndpoint.failed && <>failed</>}

      {usedEndpoint.succeeded && (
        <VStack align="stretch">
          <HStack>
            <Button>Add</Button>
          </HStack>

          {usedEndpoint.data?.map((user) => (
            <HStack borderBottom="1px solid" borderColor="primary.500" p={2} justify="space-between">
              <Text>
                {user.firstname} {user.surename}
              </Text>
              <HStack>
                <Button variant="outline" colorScheme="primary" onClick={() => {}}>
                  <FaFile />
                </Button>
                <Button variant="outline" colorScheme="primary" onClick={() => {}}>
                  <FaEnvelope />
                </Button>
              </HStack>
            </HStack>
          ))}
        </VStack>
      )}
    </>
  );
}

interface CreatePatientModalProps {
  onCreated: (patient: User) => void;
  onClose: () => void;
}

/*
username
email
password
firstname
surename
dateofbirth
complete
*/
function CreatePatientModal({onCreated, onClose}) {
  const registerUser = async (v: User) => {
    console.log('registering user', v);
  };

  return (
    <Modal onClose={onClose} isOpen>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add patient</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={4}>
          <Formik initialValues={{complete: true}} onSubmit={() => {}}>
            <VStack as={Form} align="stretch">
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
                <FormikInput type="text" name="surname" required />
              </FormControl>
              <FormControl>
                <FormLabel>Date of birth</FormLabel>
                <FormikInput type="text" name="dateofbirth" required />
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
