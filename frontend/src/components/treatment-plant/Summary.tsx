import React, {ReactElement} from 'react';
import UniformGrid from '../UniformGrid';
import {GridContent, GridField, GridFieldCompact} from './Fields';

interface Props {}

export default function Summary({}: Props): ReactElement {
  return (
    <UniformGrid columns={6} gap={0}>
      <GridContent color="primary.400" fontWeight="bold" fontSize="xl" colSpan={6}>
        Treatment Summary
      </GridContent>
      <GridContent fontWeight="bold" fontSize="xl" colSpan={6}>
        Diagnosis
      </GridContent>

      <GridFieldCompact colSpan={4} name="cancerType" title="Cancer Type/Location/Histology Subtype:" />
      <GridFieldCompact colSpan={2} name="diagnosysDate" title="Diagnosis Date (year):" />
      <GridField colSpan={6} name="stage" title="Stage Limited Stage:" />

      <GridContent fontWeight="bold" fontSize="xl" colSpan={6}>
        Treatment Completed
      </GridContent>

      <GridFieldCompact colSpan={3} name="surgery" title="Surgery TODO Checkbox" />
      <GridFieldCompact colSpan={3} name="surgeryDate" title="Surgery Date(s) (year):" />
      <GridFieldCompact colSpan={6} name="surgicalProcedure" title="Surgical procedure/location/findings:" />

      <GridFieldCompact colSpan={2} name="radiation" title="Radiation TODO Checkbox" />
      <GridFieldCompact colSpan={2} name="bodyAreaTreated" title="Body area treated:" />
      <GridFieldCompact colSpan={2} name="endYear" title="End Date (year):" />

      <GridFieldCompact
        colSpan={6}
        name="systemicTherapy"
        title="System Therapy (chemotherapy, hormonal therapy, other): TODO Checkbox"
      />

      <GridContent fontSize="xl" colSpan={4}>
        Names of Agents Used
      </GridContent>
      <GridContent fontSize="xl" colSpan={2}>
        End Dates (year)
      </GridContent>

      <GridFieldCompact colSpan={4} name="agentsUsed" title="TODO checkbox Carboplatin" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={4} name="agentsUsed" title="TODO checkbox Cisplatin" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={4} name="agentsUsed" title="TODO checkbox Etoposide" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={4} name="agentsUsed" title="TODO checkbox Paclitaxel" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={4} name="agentsUsed" title="TODO checkbox Vincristine" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={4} name="agentsUsed" title="TODO checkbox Other" />
      <GridFieldCompact colSpan={2} name="" title="" />

      <GridField
        colSpan={6}
        name="sympthomsSideEffects"
        title="Persistent symptoms os side effects of treatment: TODO checkbox (enter type(s)):"
      />
      {/* TODO box for name="symptomsSideEffectsDescription" */}

      <GridContent fontWeight="bold" fontSize="xl" colSpan={6}>
        Treatment Ongoing
      </GridContent>

      <GridFieldCompact
        colSpan={6}
        name="needOngoingTreatment"
        title="Need for ongoing (adjuvant) treatment for cancer: TODO Checkbox"
      />

      <GridContent fontSize="xl" colSpan={2}>
        Additional treatment name
      </GridContent>
      <GridContent fontSize="xl" colSpan={2}>
        Planned duration
      </GridContent>
      <GridContent fontSize="xl" colSpan={2}>
        Posibble Side effects
      </GridContent>

      {/*TODO fillek */}
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={2} name="" title="" />
      <GridFieldCompact colSpan={2} name="" title="" />
    </UniformGrid>
  );
}
