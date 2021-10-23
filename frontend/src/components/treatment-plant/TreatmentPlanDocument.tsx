import {HStack, VStack} from '@chakra-ui/layout';
import {useToast} from '@chakra-ui/toast';
import {Form, Formik} from 'formik';
import React, {ReactElement} from 'react';
import {General} from '.';
import {useAuthBackend} from '../../context/AuthBackend';
import useEndpoint from '../../hooks/useEndpoint';
import {TreatmentPlan} from '../../model/TreatmentPlan';
import callJsonEndpoint from '../../util/api/callJsonEndpoint';
import FormikButton from '../formik/FormikButton';
import Spinner from '../Spinner';
import CarePlan from './CarePlan';
import {EditableContext} from './Fields';
import Summary from './Summary';
interface Props {
  id: number;
}

export default function TreatmentPlanDocument({id}: Props): ReactElement {
  const {user} = useAuthBackend();
  const toast = useToast();

  const usedEndpoint = useEndpoint<TreatmentPlan>({
    conf: {
      url: `/treatment-plans/${id}`,
      method: 'GET',
    },
    enableRequest: true,
  });

  console.log(user);

  if (usedEndpoint.pending) return <Spinner />;
  if (usedEndpoint.failed) return <>failed</>;
  if (usedEndpoint.succeeded)
    return (
      <Formik
        initialValues={usedEndpoint.data}
        onSubmit={async (v) => {
          try {
            await callJsonEndpoint({
              conf: {
                url: `/treatment-plans/${id}`,
                data: v,
                method: 'PUT',
              },
            });
            toast({
              title: 'Treatment Plan Saved',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
          } catch (err) {
            toast({
              title: 'Error',
              description: err.message,
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          }
        }}
      >
        <VStack py={2} as={Form} spacing={6} align="stretch">
          <EditableContext.Provider value={user.userType === 'DOCTOR'}>
            <General />
            <CarePlan />
            <Summary />
            {user.userType === 'DOCTOR' && (
              <HStack justify="flex-end">
                <FormikButton type="submit" colorScheme="primary">
                  Save
                </FormikButton>
              </HStack>
            )}
          </EditableContext.Provider>
        </VStack>
      </Formik>
    );
  return null;
}
