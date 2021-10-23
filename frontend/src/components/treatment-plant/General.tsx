import React, {ReactElement} from 'react';
import UniformGrid from '../UniformGrid';
import {GridContent, GridField, GridFieldCompact} from './Fields';

interface Props {}

export default function General({}: Props): ReactElement {
  return (
    <UniformGrid columns={2} gap={0}>
      <GridContent color="primary.400" fontWeight="bold" fontSize="xl" colSpan={2}>
        General Information
      </GridContent>

      <GridFieldCompact name="patientName" title="Patient Name:" />
      <GridFieldCompact name="patientDOB" title="Patient DOB:" />
      <GridFieldCompact name="phone" title="Patient Phone:" />
      <GridFieldCompact name="email" title="Email:" />
      <GridContent colSpan={2} fontWeight="bold" textAlign="center">
        Health Care Provisioners (Including, Names, Institution)
      </GridContent>

      <GridField colSpan={2} name="primaryCareProvider" title="Primary Care Provider:" />
      <GridField colSpan={2} name="surgeon" title="Surgeon:" />
      <GridField colSpan={2} name="radiationOncologist" title="Radiant Oncologist:" />
      <GridField colSpan={2} name="medicalOncologyst" title="Medical Oncologist:" />
      <GridField colSpan={2} name="otherProviders" title="Other Providers:" />
    </UniformGrid>
  );
}
