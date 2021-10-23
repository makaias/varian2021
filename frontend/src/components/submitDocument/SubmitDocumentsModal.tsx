import {Container, VStack} from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React, {FC} from 'react';
import {Form, Formik} from 'formik';
import FormikApiError from '../formik/FormikApiError';
import {FormControl} from '@chakra-ui/form-control';
import FormikInput from '../formik/FormikInput';
import FormikButton from '../formik/FormikButton';
import callJsonEndpoint from '../../util/api/callJsonEndpoint';
import {AxiosResponse} from 'axios';
import {Button} from '@chakra-ui/button';
import FormikRichTextEditor from '../formik/FormikRichTextEditor';

interface Props {
  patientId: number;
  patientName: string;
  isOpen: boolean;
  onClose: () => void;
}

async function doSubmit({patient, content}): Promise<AxiosResponse<any>> {
  return callJsonEndpoint({
    conf: {
      url: '/documents/create',
      method: 'post',
      data: {
        patient: patient,
        content: content
      }
    }
  });
}

const SubmitDocumentsModal: FC<Props> = (props) => {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen} isCentered  size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Send document to {props.patientName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              patient: props.patientId,
              content: null
            }}
            onSubmit={async (v, formik) => {
              console.log(v)
              try {
                await doSubmit(v);
                props.onClose();
              } catch (err) {
                formik.setFieldError('__api__', err.message);
              }
            }}
          >
            <Container as={Form} p={6}  borderRadius={6}>
              <VStack spacing={4} align='stretch'>
                <FormikApiError />
                <FormControl>
                  <FormikRichTextEditor name='content' readOnly={false} />
                </FormControl>
                <FormikButton type='submit' variant='solid' colorScheme='primary'>
                  Send
                </FormikButton>
              </VStack>
            </Container>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>


  );
};

export default SubmitDocumentsModal;
