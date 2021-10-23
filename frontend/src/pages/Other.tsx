import {ListItem, Text, UnorderedList} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';

interface Props {}

export default function Other({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Other',
  });
  return (
    <>
      <Text fontWeight="bold" marginTop="1rem">
        Fatigue
      </Text>
      <Text marginTop="1rem">
        Cancer and cancer treatment may cause fatigue. The medical term for this is "cancer-related fatigue." It is a
        feeling of physical, emotional, and mental exhaustion even though you are getting enough rest and sleep.
      </Text>
      <Text marginTop="1rem">
        Cancer-related fatigue can affect your daily life. And, some people may experience this kind of fatigue for
        months or years after finishing treatment.
      </Text>
      <Text marginTop="1rem">What causes cancer-related fatigue and how is it treated?</Text>
      <UnorderedList lp={4}>
        <ListItem>
          Health changes related to cancer. Your doctor may take a blood sample or perform other tests. These results
          may show cancer-related causes of fatigue. Fatigue can be a symptom of the cancer itself or that the cancer is
          growing or spreading.
        </ListItem>
        <ListItem>Cancer treatments. Certain cancer treatments contribute to fatigue.</ListItem>
        <ListItem>
          Pain. Living with constant pain is exhausting and stressful. And, many pain medicines cause drowsiness and
          fatigue. Ask your health care team about other ways to manage pain and its side effects.
        </ListItem>
        <ListItem>
          Depression, anxiety, and stress. Managing stress and treating depression and anxiety can reduce your fatigue.
        </ListItem>
        <ListItem>
          Sleeping problems. Stress, pain, and worry may contribute to insomnia. This means having trouble falling
          asleep or staying asleep. In addition, some medicines disturb normal sleep patterns.
        </ListItem>
        <ListItem>
          Poor nutrition. A well-balanced diet may help reduce fatigue. Consider talking with a registered dietitian
          (RD) for nutrition counseling. These professionals can help you find ways to eat well, especially if you have
          taste issues, appetite loss, or nausea and vomiting.
        </ListItem>
        <ListItem>
          Anemia. Many patients with cancer have anemia. This is a decrease in the amount of red blood cells. People
          with anemia may feel extreme and overwhelming fatigue. Anemia treatment may include supplements, drugs, or
          blood transfusions.
        </ListItem>
        <ListItem>
          Other medical/health conditions. People with cancer, especially those who are 65 years and older, may have
          other health conditions that contribute to fatigue. It is important to treat any medical conditions that are
          contributing to your fatigue.
        </ListItem>
      </UnorderedList>
    </>
  );
}
