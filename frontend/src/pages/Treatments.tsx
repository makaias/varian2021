import {Button} from '@chakra-ui/button';
import {Box, HStack, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {useLayoutConfig} from '../app/layout';
import FailureParagraph from '../components/FailureParagraph';
import Spinner from '../components/Spinner';
import {useAuthBackend} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
import {TreatmentPlan} from '../model/TreatmentPlan';

interface Props {}

export default function Treatments({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Treatments',
  });
  const authBackend = useAuthBackend();
  const usedEndpoint = useEndpoint<TreatmentPlan[]>({
    conf: {
      url: `/treatment-plans?doctor=${authBackend.user?.id}`,
    },
    deps: [authBackend.user?.id],
  });
  if (!authBackend.isDoctor) {
    return null;
  }

  return (
    <>
      <VStack paddingTop="1rem" align="stretch">
        <NavLink to="/create-treatment-plan">
          <Button colorScheme="primary">Create new Treatment</Button>
        </NavLink>
        {usedEndpoint.pending && <Spinner />}
        {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

        {usedEndpoint.succeeded && (
          <VStack align="stretch" spacing={6}>
            {usedEndpoint.data.map((treatmentPlant) => (
              <TreatmentItem treatmentPlan={treatmentPlant} />
            ))}
          </VStack>
        )}
      </VStack>
    </>
  );
}

function TreatmentItem({treatmentPlan}: {treatmentPlan: TreatmentPlan}) {
  return (
    <NavLink to={`/treatment-plan/${treatmentPlan.id}`}>
      <Box p={3} bg="white" borderTop="1px" borderColor="primary.500" cursor="pointer">
        <HStack justify="space-between" align="center" spacing={6} height="fit-content" w="100%">
          <Text color="primary.500" fontWeight="bold" fontSize="lg">
            {treatmentPlan.patientName}
          </Text>
          <Text fontSize="sm">{treatmentPlan.created_at}</Text>
        </HStack>
      </Box>
    </NavLink>
  );
}
