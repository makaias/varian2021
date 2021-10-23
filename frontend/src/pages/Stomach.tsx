import {ListItem, Text, UnorderedList} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';

interface Props {}

export default function Stomach({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Stomach',
  });
  return (
    <>
      <Text marginTop="1rem" fontWeight="bold" fontSize="xl">
        Nausea and Vomiting
      </Text>
      <Text marginTop="1rem">
        Nausea and vomiting are common and sometimes serious side effects of cancer treatment. Chemotherapy, radiation
        therapy, and other cancer treatments can cause nausea and vomiting.
      </Text>
      <Text marginTop="1rem">
        Nausea is feeling queasy, sick to your stomach, or like you might throw up. Vomiting is throwing up the food and
        liquid in your stomach.
      </Text>
      <Text marginTop="1rem">
        These symptoms can be mild or severe. Mild nausea and vomiting can be uncomfortable but does not usually harm
        your health. Vomiting a lot can cause other health problems, such as dehydration, weight loss, and fatigue.
        Always tell your doctor if you feel nausea or experience vomiting, even if it is mild. There are many
        anti-nausea treatments available today. You might take 1 medicine or a combination of medicines to help prevent
        or reduce these side effects.
      </Text>
      <Text marginTop="1rem">
        There are ways to help relieve nausea and vomiting that do not use medicines. These include:
      </Text>
      <UnorderedList lp={4}>
        <ListItem>
          Changing what foods or how you eat, such as eating smaller meals more often, and staying hydrated. An oncology
          dietitian can help with this.
        </ListItem>
        <ListItem>Distracting yourself and doing things that relax you</ListItem>
        <ListItem>Doing meditation or focusing your mind on a positive picture, scene, or idea</ListItem>
        <ListItem>Acupressure and acupuncture</ListItem>
        <ListItem>
          Some herbal products can also help nausea, such as ginger. Always talk to your doctor before using any
          alternative or complementary treatment. If your doctor prescribes anti-nausea medicines, do not stop taking
          them or use something else without asking your doctor.
        </ListItem>
      </UnorderedList>
      <Text marginTop="1rem" fontWeight="bold" fontSize="xl">
        Diarrhea
      </Text>
      <Text marginTop="1rem">
        Although mild diarrhea can be unpleasant, it usually does not cause serious health problems. But severe diarrhea
        can cause dehydration and electrolyte imbalances. This happens when your body loses too much water and important
        minerals.
      </Text>
      <Text marginTop="1rem">
        If you have diarrhea during cancer treatment, ask your health care team how to manage it. Talk openly about it
        with them. If they know about the problem, they can help you. Relieving your side effects is an important part
        of cancer care and treatment. This is called palliative care or supportive care.
      </Text>
      <Text marginTop="1rem">Grades of diarrhea:</Text>
      <UnorderedList lp={4}>
        <ListItem>Grade 1. Passing up to 4 more stools a day than your baseline.</ListItem>
        <ListItem>Grade 2. Passing 4 to 6 more stools a day than your baseline.</ListItem>
        <ListItem>
          Grade 3. Passing 7 or more stools a day than your baseline. Grade 3 diarrhea may need treatment in a hospital
          or clinic. People with grade 3 diarrhea cannot control their bowel movements and have trouble meeting daily
          needs without help.
        </ListItem>
        <ListItem>Grade 4. This is a life-threatening condition. You need medical care right away.</ListItem>
      </UnorderedList>
      <Text marginTop="1rem" fontWeight="bold">
        How can diarrhea be prevented or treated?
      </Text>
      <UnorderedList lp={4}>
        <ListItem>If you have mild diarrhea, consider these options to help manage it:</ListItem>
        <UnorderedList lp={4}>
          <ListItem>Avoid caffeine, alcohol, dairy, fat, fiber, orange juice, prune juice, and spicy foods.</ListItem>
          <ListItem>
            Avoid medication such as laxatives, stool softeners, and metoclopramide (Reglan). Sometimes, doctors
            prescribe metoclopramide to prevent nausea and vomiting-
          </ListItem>
          <ListItem>
            Eat small meals. Choose foods that are easy to digest. These include bananas, rice, applesauce, and toast.
            If therapy is causing diarrhea, your doctor may recommend a low-residue diet. When you eat a low-residue
            diet, your body makes less stool. It includes low-fiber foods.
          </ListItem>
          <ListItem>Drink water and other clear liquids to prevent dehydration.</ListItem>
        </UnorderedList>
        <ListItem>
          If you have severe diarrhea or mild diarrhea that does not improve, tell your health care team. Depending on
          your symptoms, your doctor may:
        </ListItem>

        <UnorderedList lp={4}>
          <ListItem>Change your diarrhea medication</ListItem>
          <ListItem>Check your electrolytes level</ListItem>
          <ListItem>Give you fluids through an intravenous (IV) line that goes in a vein in your arm</ListItem>
          <ListItem>Check for an infection</ListItem>
          <ListItem>Change the schedule or dose of therapy</ListItem>
        </UnorderedList>
      </UnorderedList>
    </>
  );
}
