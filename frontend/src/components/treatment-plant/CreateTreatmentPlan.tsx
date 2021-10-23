import {Button} from '@chakra-ui/button';
import {Container, Heading, HStack, VStack} from '@chakra-ui/layout';
import {Field, Form, Formik} from 'formik';
import React, {ReactElement} from 'react';
import {useHistory} from 'react-router';
import {User} from '../../context/AuthBackend';
import useEndpoint from '../../hooks/useEndpoint';
import {TreatmentPlan} from '../../model/TreatmentPlan';
import callJsonEndpoint from '../../util/api/callJsonEndpoint';
import FormikApiError from '../formik/FormikApiError';
import UserSelector from '../selector/UserSelector';
import Spinner from '../Spinner';

interface Props {}

export default function CreateTreatmentPlan({}: Props): ReactElement {
  const patientsEndpoint = useEndpoint<User[]>({
    conf: {
      url: '/doctors/patients',
    },
    deps: [],
    enableRequest: true,
  });

  const history = useHistory();

  const tpEndpoint = useEndpoint<TreatmentPlan>({
    conf: {
      url: '/doctors/create-treatment-plan',
      method: 'POST',
    },
    deps: [],
    enableRequest: true,
  });

  if (patientsEndpoint.pending) return <Spinner />;
  if (patientsEndpoint.succeeded)
    return (
      <Container>
        <Heading>Create Treatment Plan</Heading>
        <Formik
          initialValues={{
            user: '',
          }}
          onSubmit={async (v, formik) => {
            try {
              const tp = await callJsonEndpoint<TreatmentPlan>({
                conf: {
                  url: '/doctors/create-treatment-plan',
                  method: 'POST',
                  data: v,
                },
              });
              history.push(`/treatment-plan/${tp.data.id}`);
            } catch (err) {
              formik.setFieldError('__api__', err.message);
            }
          }}
        >
          <VStack pt={4} as={Form} align="stretch">
            <FormikApiError />
            <Field as={UserSelector} options={patientsEndpoint.data} name="user" />
            <HStack justify="flex-end">
              <Button type="submit">Create</Button>
            </HStack>
          </VStack>
        </Formik>
      </Container>
    );
  return null;
}
