import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import UniformGrid from '../components/UniformGrid';

interface Props {}

export default function Chest({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Chest',
  });
  return (
    <>
      <Text marginTop="1rem" fontWeight="bold">
        Coughing
      </Text>
      <Text marginTop="1rem">
        Coughing is a natural reflex. It clears your airways of irritants and protects your lungs. A cough can be due to
        a simple cold or allergies. But some coughs carry more serious risks. People with cancer may also develop a
        cough related to cancer or its treatment.
      </Text>
      <Text marginTop="1rem">
        Coughs that last a long time can cause serious problems by disrupting sleep. Severe persistent coughs can also
        cause vomiting, dizziness, headaches, loss of bladder control, and muscle strains. Other risks include rib
        fractures, especially for people with cancer that has spread to the bone.
      </Text>
      <Text marginTop="1rem">
        Treating a persistent cough is an important part of your cancer care and treatment. This is called palliative
        care or supportive care. If you are receiving cancer treatment, you should let your health care team know about
        a cough that develops.
      </Text>

      <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
        These tips can help you manage your cough:
      </Text>
      <UnorderedList pl={4}>
        <ListItem>Avoid smoking and breathing in secondhand smoke</ListItem>
        <ListItem>Take a hot, steamy shower to loosen mucus</ListItem>
        <ListItem>Stay hydrated, which makes mucus in the throat thinner</ListItem>
        <ListItem>Mild exercise can help open your airways, but avoid very strenuous exercise</ListItem>
        <ListItem>Avoid anything that triggers an allergic reaction in you</ListItem>
        <ListItem>
          Avoid throat-irritating aerosol sprays, like hairspray, deodorant, fragrances, and cleaning products
        </ListItem>
      </UnorderedList>

      <Text marginTop="1rem">
        You can also use cough drops, have a warm drink with honey, and use a humidifier if the air in your home is dry.
        Relaxation techniques, such as deep breathing, can also help with a cough.
      </Text>
      <Text marginTop="1rem" fontWeight="bold">
        Shortness of Breath or Dyspnea
      </Text>
      <Text marginTop="1rem">
        Dyspnea is a feeling of breathlessness. Many people with advanced cancer may experience it. People with
        earlier-stage cancers who have other conditions that affect the heart or lungs, such as a blood clot, may also
        have dyspnea.
      </Text>
      <Text marginTop="1rem" marginBottom="1rem">
        Common symptoms of dyspnea include:
      </Text>
      <UnorderedList pl={4}>
        <ListItem>Uncomfortable breathing</ListItem>
        <ListItem>Shortness of breath</ListItem>
        <ListItem>Not being able to get enough air</ListItem>
        <ListItem>A feeling of smothering, tightness, drowning, or suffocation</ListItem>
      </UnorderedList>
      <Text marginTop="1rem">
        All people with advanced cancer who have shortness of breath should be referred to a palliative care team. If
        you have a common cause of dyspnea (see “Causes of shortness of breath,” above), your health care provider will
        talk with you about treatment options based on your preferences and overall health. If the cancer itself is
        causing your shortness of breath, further treatment to remove or reduce cancer may be recommended as part of
        your overall care plan. If you have a common cause of dyspnea (see “Causes of shortness of breath,” above), your
        health care provider will talk with you about treatment options based on your preferences and overall health. If
        the cancer itself is causing your shortness of breath, further treatment to remove or reduce cancer may be
        recommended as part of your overall care plan. Your provider may also recommend strategies to help with
        improving airflow, such as directing a fan at your cheek or sitting in front of a fan.
      </Text>
      <Text marginTop="1rem">Complementary therapies to manage dyspnea without medication, such as:</Text>
      <UnorderedList pl={4}>
        <ListItem>Breathing techniques</ListItem>
        <ListItem>Relaxation techniques</ListItem>
        <ListItem>Distraction strategies</ListItem>
        <ListItem>Posture techniques</ListItem>
        <ListItem>Physical therapy</ListItem>
      </UnorderedList>
      <Text marginTop="1rem">
        Sometimes, relieving shortness of breath without the use of medication may not work. There are different ways to
        treat shortness of breath with medication, including:
      </Text>
      <UnorderedList pl={4}>
        <ListItem>Pain medications called opioids to relieve shortness of breath</ListItem>
        <ListItem>
          Short-acting benzodiazepines, a type of anxiety medication, to relieve anxiety caused by shortness of breath
        </ListItem>
        <ListItem>
          Anti-inflammatory drugs called corticosteroids to treat lung inflammation or airway obstructions
        </ListItem>
        <ListItem>
          Bronchodilators, also known as inhalers, can be used to relieve symptoms for certain patients
        </ListItem>
      </UnorderedList>
      <Text marginTop="1rem"></Text>

      <UniformGrid columns={[1, 1, 2]} gap={4} columnGap={7}>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold"></Text>
          <UnorderedList pl={4}></UnorderedList>
        </VStack>
      </UniformGrid>
    </>
  );
}
