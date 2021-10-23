import React, {ReactElement} from 'react';
import UniformGrid from '../UniformGrid';
import {GridCheckBox, GridContent, GridField, GridFieldCompact} from './Fields';

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

      <GridCheckBox colSpan={3} name="surgery" title="Surgery" />
      <GridFieldCompact colSpan={3} name="surgeryDate" title="Surgery Date(s) (year):" />
      <GridFieldCompact colSpan={6} name="surgicalProcedure" title="Surgical procedure/location/findings:" />

      <GridCheckBox colSpan={2} name="radiation" title="Radiation" />
      <GridFieldCompact colSpan={2} name="bodyAreaTreated" title="Body area treated:" />
      <GridFieldCompact colSpan={2} name="endYear" title="End Date (year):" />

      <GridCheckBox colSpan={6} name="systemicTherapy" title="System Therapy (chemotherapy, hormonal therapy, other)" />

      <GridContent fontSize="xl" colSpan={4}>
        Names of Agents Used
      </GridContent>
      <GridContent fontSize="xl" colSpan={2}>
        End Dates (year)
      </GridContent>

      <GridCheckBox colSpan={4} name="agentsUsed[0].used" title="Carboplatin" />
      <GridFieldCompact colSpan={2} name="agentsUsed[0].endYear" title="" />
      <GridCheckBox colSpan={4} name="agentsUsed[1].used" title="Cisplatin" />
      <GridFieldCompact colSpan={2} name="agentsUsed[1].endYear" title="" />
      <GridCheckBox colSpan={4} name="agentsUsed[2].used" title="Etoposide" />
      <GridFieldCompact colSpan={2} name="agentsUsed[2].endYear" title="" />
      <GridCheckBox colSpan={4} name="agentsUsed[3].used" title="Paclitaxel" />
      <GridFieldCompact colSpan={2} name="agentsUsed[3].endYear" title="" />
      <GridCheckBox colSpan={4} name="agentsUsed[4].used" title="Vincristine" />
      <GridFieldCompact colSpan={2} name="agentsUsed[4].endYear" title="" />
      <GridCheckBox colSpan={4} name="agentsUsed[5].used" title="Other" />
      <GridFieldCompact colSpan={2} name="agentsUsed[5].endYear" title="" />

      <GridField
        colSpan={6}
        name="sympthomsSideEffects"
        title="Persistent symptoms os side effects of treatment: (enter type(s)):"
      />

      <GridContent fontWeight="bold" fontSize="xl" colSpan={6}>
        Treatment Ongoing
      </GridContent>

      <GridCheckBox
        colSpan={6}
        name="needOngoingTreatment"
        title="Need for ongoing (adjuvant) treatment for cancer: "
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
      <GridFieldCompact colSpan={2} name="additionalTreatment[0].name" title="" />
      <GridFieldCompact colSpan={2} title="" name="additionalTreatment[0].duration" />
      <GridFieldCompact colSpan={2} title="" name="additionalTreatment[0].possibleEffects" />
      <GridFieldCompact colSpan={2} name="additionalTreatment[1].name" title="" />
      <GridFieldCompact colSpan={2} title="" name="additionalTreatment[1].duration" />
      <GridFieldCompact colSpan={2} title="" name="additionalTreatment[1].possibleEffects" />
    </UniformGrid>
  );
}
