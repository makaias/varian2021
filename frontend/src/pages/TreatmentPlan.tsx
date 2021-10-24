import {Box} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useParams} from 'react-router';
import {useLayoutConfig} from '../app/layout';
import TreatmentPlanDocument from '../components/treatment-plant/TreatmentPlanDocument';

interface Props {}

export default function TreatmentPlan({}: Props): ReactElement {
  useLayoutConfig({title: 'Treatment summary', bg: 'plain'});
  const {id} = useParams<{id}>();

  return (
    <Box py={4}>
      <TreatmentPlanDocument id={id} />;
    </Box>
  );
}
