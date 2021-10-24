import {Container, Text, VStack} from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, {FC} from 'react';
import {Button} from '@chakra-ui/button';
import {NavLink} from 'react-router-dom';

interface Props {
  treatmentId: number;
  patientName: string;
  isOpen: boolean;
  onClose: () => void;
}

const CalendarPopup: FC<Props> = (props) => {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Patient: {props.patientName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <NavLink to={`/treatment-plan/${props.treatmentId}`}>
              <Button colorScheme="primary">View Treatment</Button>
            </NavLink>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CalendarPopup;
