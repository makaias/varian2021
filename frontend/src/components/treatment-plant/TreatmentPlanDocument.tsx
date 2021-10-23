import {HStack, VStack} from '@chakra-ui/layout';
import {Form, Formik} from 'formik';
import React, {ReactElement} from 'react';
import {CarePlan, General, Summary} from '.';
import {useAuthBackend} from '../../context/AuthBackend';
import useEndpoint from '../../hooks/useEndpoint';
import {TreatmentPlan} from '../../model/TreatmentPlan';
import FormikButton from '../formik/FormikButton';
import Spinner from '../Spinner';
import {EditableContext} from './Fields';
interface Props {
  id: number;
}

export default function TreatmentPlanDocument({id}: Props): ReactElement {
  const {user} = useAuthBackend();

  const usedEndpoint = useEndpoint<TreatmentPlan>({
    conf: {
      url: `/patients/treatments/${id}`,
      method: 'GET',
    },
    enableRequest: true,
  });

  if (usedEndpoint.pending) return <Spinner />;
  if (usedEndpoint.failed) return <>failed</>;
  if (usedEndpoint.succeeded)
    return (
      <Formik
        initialValues={usedEndpoint.data}
        onSubmit={async (v) => {
          console.log(v);
        }}
      >
        <VStack as={Form} spacing={6} align="stretch">
          <EditableContext.Provider value={user.userType === 'DOCTOR'}>
            <General />
            <CarePlan />
            <Summary />
            <HStack justify="flex-end">
              <FormikButton type="submit" colorScheme="primary">
                Save
              </FormikButton>
            </HStack>
          </EditableContext.Provider>
        </VStack>
      </Formik>
    );
  return null;
}
