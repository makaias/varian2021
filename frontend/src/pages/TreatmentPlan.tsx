import {Formik} from 'formik';
import React, {ReactElement} from 'react';
import {CarePlan, General, Summary} from '../components/treatment-plant';

interface Props {}

export default function TreatmentPlan({}: Props): ReactElement {
  return (
    <Formik initialValues={{patientName: 'asd'}} onSubmit={() => {}}>
      <>
        <General />
        <CarePlan />
        <Summary />
      </>
    </Formik>
  );
}
