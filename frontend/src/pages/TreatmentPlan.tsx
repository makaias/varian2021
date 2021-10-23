import React, {ReactElement} from 'react';
import {useParams} from 'react-router';
import TreatmentPlanDocument from '../components/treatment-plant/TreatmentPlanDocument';

interface Props {}

export default function TreatmentPlan({}: Props): ReactElement {
  const {id} = useParams<{id}>();

  return <TreatmentPlanDocument id={id} />;
}
