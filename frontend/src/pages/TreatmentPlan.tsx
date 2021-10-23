import {Formik} from 'formik';
import React, {ReactElement} from 'react';
import {General} from '../components/treatment-plant';

interface Props {}

export default function TreatmentPlan({}: Props): ReactElement {
  return (
    <Formik initialValues={{patientName: 'asd'}} onSubmit={() => {}}>
      <General />
    </Formik>
  );
}
