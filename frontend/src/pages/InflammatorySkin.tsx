import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/layout';
import {Table, Thead, Tr, Th, Tbody, Td} from '@chakra-ui/react';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import UniformGrid from '../components/UniformGrid';

interface Props {}

export default function InflammatorySkin({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Inflammatory skin conditions',
  });
  return (
    <>
      <Text marginTop="1rem">
        Radiotherapy for cancer is used increasingly. Because skin cells undergo rapid turnover, the ionizing radiation
        of radiotherapy has collateral effects that are often expressed in inflammatory reactions. In the skin, where
        the rate of cell turnover is high, ionizing radiation has collateral effects that make adverse reactions very
        common. Up to half of patients reportedly develop at least mild radiodermatitis, and there is a small percentage
        of patients who also present more serious skin conditions affecting large surface areas.
      </Text>
      <Text marginTop="1rem">
        The acute form generally appears in the irradiated zone an average of 10 to 14 days after radiotherapy.
        Currently, the clinical manifestations are mild to moderate in their intensity, attributable to advances in
        modern devices such as linear accelerators and megavoltage units that assist in delineating the radiation field
        (conformal radiotherapy) andin appropriately fractioning the dose. The severity of acute radiodermatitis is
        usually classified in 4 levels according to the fourth version of the unified criteria of the National Cancer
        Institute.
      </Text>
      <VStack align="flex-start" marginTop="1rem">
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Grade 1</Th>
              <Th>Grade 2</Th>
              <Th>Grade 3</Th>
              <Th>Grade 4</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Text fontWeight="bold">Skin lesions</Text>
              </Td>
              <Td>
                <Text>Faint erythema</Text>
                <Text>Dry scaling</Text>
              </Td>
              <Td>
                <Text>Moderate-brisk erythema</Text>
                <Text>Moist desquamation</Text>
              </Td>
              <Td>
                <Text>Intense erythema</Text>
                <Text>Pitting edema</Text>
                <Text>Moist desquamation</Text>
              </Td>
              <Td>
                <Text>Ulceration</Text>
                <Text>Necrotic plaques</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">Epidermal necrosis</Text>
              </Td>
              <Td>
                <Text>No</Text>
              </Td>
              <Td>
                <Text>No</Text>
              </Td>
              <Td>
                <Text>Superficial</Text>
              </Td>
              <Td>
                <Text>Full thickness dermis</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">Location</Text>
              </Td>
              <Td>
                <Text>Initially follicular</Text>
              </Td>
              <Td>
                <Text>Mostly confined to skin folds</Text>
              </Td>
              <Td>
                <Text>Not confined to skin folds</Text>
              </Td>
              <Td>
                <Text>Not confined to skin folds</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">Other</Text>
              </Td>
              <Td>
                <Text>Depigmentation, hair loss</Text>
              </Td>
              <Td>
                <Text>Moderate edema</Text>
              </Td>
              <Td>
                <Text>Hemorrhagic zones after trauma</Text>
              </Td>
              <Td>
                <Text>Spontaneous bleeding</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
          Prevent and treat
        </Text>
        <UnorderedList pl={4}>
          <ListItem>Wash the irradiated areas with a mild shampoo or soap to prevent superinfection.</ListItem>
          <ListItem>
            Although deodorants containing aluminum salts or pads containing metals were formerly believed to increase
            radiotherapeutic toxicity and were therefore contraindicated, clinical trials have demonstrated that these
            products do not exacerbate the severity of radiodermatitis.
          </ListItem>
          <ListItem>
            The use of topical corticosteroids, for their antiinflammatory effect, is controversial. Medium to
            highpotency corticosteroids are effective in treating already established radiodermatitis, but trials have
            been unable o demonstrate their efficacy in reducing the severity of radiodermatitis when used
            prophylactically. However, they do improve quality of life by reducing itching and burning.
          </ListItem>
          <ListItem>
            If a superinfection is suspected, a bacterial culture should be started, along with topical (silver
            sulfadiazine cream) or systemic (antibiotic) treatment.
          </ListItem>
          <ListItem>
            Special precautions should be taken with gynecologic or anal canal tumors because they are associated with
            grade 3 or 4 severity and greater risk of superinfection.
          </ListItem>
          <ListItem>
            Skin folds should be exposed to air because they are more often affected by radiodermatitis, restrictive
            clothing, exposure to sunlight, and injury are to be avoided.
          </ListItem>
        </UnorderedList>
      </VStack>
      <br />
    </>
  );
}
