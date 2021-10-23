import {ReactElement} from 'react';
import UniformGrid from '../UniformGrid';
import {GridContent, GridField} from './Fields';

interface Props {}

export default function CarePlan({}: Props): ReactElement {
  return (
    <UniformGrid column={15} gap={0}>
      <GridContent color="primary.400" fontWeight="bold" fontSize="x1" colSpan={15}>
        Follow-up Care Plan
      </GridContent>

      <GridContent fontWeight="bold" fontSize="x1" colSpan={15}>
        Schedule of Clinical Visits
      </GridContent>

      <GridContent fontSize="x1" colSpan={6}>
        Coordinating Provider
      </GridContent>

      <GridContent fontSize="x1" colSpan={9}>
        When/How often
      </GridContent>

      <GridField name="ph" colSpan={6}></GridField>
      <GridField name="ph" colSpan={9}></GridField>
      <GridField name="ph" colSpan={6}></GridField>
      <GridField name="ph" colSpan={9}></GridField>
      <GridField name="ph" colSpan={6}></GridField>
      <GridField name="ph" colSpan={9}></GridField>
      <GridField name="ph" colSpan={6}></GridField>
      <GridField name="ph" colSpan={9}></GridField>

      <GridContent fontWeight="bold" fontSize="x1" colSpan={15}>
        Cancer Surveillance or other Recommended Tests
      </GridContent>

      <GridContent fontSize="x1" colSpan={5}>
        Coordinating Provider
      </GridContent>

      <GridContent fontSize="x1" colSpan={5}>
        Test
      </GridContent>

      <GridContent fontSize="x1" colSpan={5}>
        How Often
      </GridContent>

      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>

      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>

      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>

      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>

      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>
      <GridField name="ph" colSpan={5}></GridField>

      <GridContent fontSize="x1" colSpan={15}>
        TODO Bende csinád meeeg
      </GridContent>
    </UniformGrid>
  );
}
