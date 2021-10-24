import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import UniformGrid from '../components/UniformGrid';

interface Props {}

export default function HealthyEating({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Healthy eating',
  });
  return (
    <>
      <Text marginTop="1rem">
        What you eat is really important when you have cancer. Your body needs enough calories and nutrients to stay
        strong. But the disease can make it hard to get what you need, which can be different before, during, and after
        treatment. And sometimes, you just won’t feel like eating.
      </Text>
      <Text marginTop="1rem">
        You don’t need a drastic diet makeover. Just a few simple tricks to make good-for-you foods easy and appetizing.
      </Text>
      <UniformGrid columns={[1, 1, 2]} gap={4} columnGap={7}>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Before Treatment
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Start focusing on healthy foods even before you begin your treatment. You don't know how it will affect
              you or what kind of side effects you might have. That's why it's a good idea to get good nutrition now. It
              can help you feel better and your body stay strong.
            </ListItem>
            <ListItem>
              It’s also a good time to plan for the days when you won’t feel like making anything to eat. Fill your
              fridge and pantry with healthy foods, especially those that need very little (or no) cooking. Nuts,
              applesauce, yogurt, pre-chopped veggies, and microwaveable brown rice or other whole grains are easy
              options. Make batches of some of your favorite entrees and freeze them, too.
            </ListItem>
            <ListItem>
              You may also want to line up some friends and family who can bring you meals for the first days or weeks
              of your therapy.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            During Treatment
          </Text>
          <UnorderedList pl={4}>
            <ListItem></ListItem>
            <ListItem>
              You may have days when you feel hungry, and others when food is the last thing you want.
            </ListItem>
            <ListItem>
              On good days, eat lots of protein and healthy calories. That will keep your body strong and help repair
              damage from your treatment.
            </ListItem>
            <ListItem>High-protein foods include:</ListItem>
            <UnorderedList>
              <ListItem>Lean meat, chicken, and fish</ListItem>
              <ListItem>Eggs</ListItem>
              <ListItem>Beans, nuts, and seeds</ListItem>
              <ListItem>Cheese, milk, and yogurt</ListItem>
            </UnorderedList>
            <ListItem>
              Try to eat at least 2 1/2 cups of fruits and vegetables a day. Include dark green and deep yellow veggies,
              and citrus fruits like oranges and grapefruits. Colorful foods like these have many healthy nutrients.
              Just be sure to wash them thoroughly.
            </ListItem>
            <ListItem>
              Drink plenty of liquids all day. Water is a great choice. Try fresh-squeezed juice, too. It gives you some
              extra vitamins along with the liquid your body needs to stay hydrated.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Manage Side Effects
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Many side effects of cancer treatments can make it hard to get enough to eat. Your diet may help you get
              past some of the most common issues.
            </ListItem>
            <ListItem>
              Nausea/vomiting: Avoid high-fat, greasy, or spicy foods, or those with strong smells. Eat dry foods like
              crackers or toast every few hours. Sip clear liquids like broths, sports drinks, and water.
            </ListItem>
            <ListItem>
              Mouth or throat problems: For sores, pain, or trouble swallowing, stick with soft foods. Avoid anything
              rough or scratchy, and spicy or acidic foods. Eat meals lukewarm (not hot or cold). And use a straw for
              soups or drinks.
            </ListItem>
            <ListItem>
              Diarrhea and constipation: For diarrhea, it’s really important to stay hydrated. Drink lots of liquids,
              and cut back on high-fiber foods like whole grains and vegetables. If you’re constipated, slowly add more
              high-fiber foods to your diet. Plenty of liquids is key for this problem, too.
            </ListItem>
            <ListItem>
              Change in taste: Treatment can have a funny effect on your taste buds. Things you didn't like before might
              taste good now. So be open to new foods. See if you like sour or tart flavors like ginger or pomegranates.
              Spices such as rosemary, mint, and oregano might help you enjoy other foods, too.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            ’Cancer Diets’
          </Text>
          <Text>
            Plenty of people tout "special" diets that they say will help treat cancer or keep it from coming back.
            Maybe you’ve heard that you should go vegan, vegetarian, or start a raw diet. Before you make any major
            changes, talk to your doctor. There’s no diet that can cure cancer. There's also no good research that shows
            that any eating plan, like a vegetarian diet, for example, can lower the chance of cancer coming back. Your
            best bet is to stick with a balanced diet with lean proteins, fruits, vegetables, whole grains, and low-fat
            dairy. Limit your sugar, caffeine, salt, and alcohol.
          </Text>
        </VStack>
      </UniformGrid>
      <br />
    </>
  );
}
