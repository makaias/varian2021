import {GridItem, ListItem, OrderedList, UnorderedList} from '@chakra-ui/layout';
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

      {/* TODO FOR BENDE */}
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

      {/* TODO FOR BENDE */}
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

      {/*itt is valami TODO i guess*/}
      <GridContent fontSize="x1" colSpan={15} textAlign="left">
        <UniformGrid columns={1} gap={2}>
          Please continue ro see your primary care provider for all general heath cal recommended for a man/woman your
          age, including cancer screening tests. Any symptoms should be brought to the attention of your provider:
          <OrderedList>
            <ListItem>Anything that represents a brand new symptom;</ListItem>
            <ListItem>Anything that represents a persistent symptom;</ListItem>
            <ListItem>Anything you are worried about that might be related to the cancer coming back.</ListItem>
          </OrderedList>
        </UniformGrid>
      </GridContent>

      <GridContent fontSize="x1" colSpan={15} textAlign="left">
        <UniformGrid columns={2} gap={2}>
          <GridItem colSpan={15}>
            Possible late- and long-term effects that someone with this type of cancer and treatment may experience:
          </GridItem>
          <GridItem>
            <UnorderedList>
              <ListItem>Constipation</ListItem>
              <ListItem>Fatigue</ListItem>
              <ListItem>Hair loss</ListItem>
              <ListItem>Hearing loss</ListItem>
              <ListItem>Kidney problems</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem>
            <UnorderedList>
              <ListItem>Memory loss</ListItem>
              <ListItem>Nausea</ListItem>
              <ListItem>Peripheral neuropathy (numbness/tingling)</ListItem>
              <ListItem>Pneumonitis or inflammation of lung tissues</ListItem>
              <ListItem>Skin rash</ListItem>
            </UnorderedList>
          </GridItem>
        </UniformGrid>
      </GridContent>
    </UniformGrid>
  );
}
