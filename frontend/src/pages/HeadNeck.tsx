import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import UniformGrid from '../components/UniformGrid';

interface Props {}

export default function HeadNeck({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Head, neck',
  });
  return (
    <>
      <Text marginTop="1rem" fontSize="xl" fontWeight="bold">
        Hair Loss or Alopecia
      </Text>
      <Text marginTop="1rem">
        Hair loss is a common side effect of cancer treatment. These cancer treatments can harm the cells that help hair
        grow. It can affect hair all over your body, including your head, face, arms, legs, underarms, and pubic area.
        The medical term for hair loss is alopecia. Radiation therapy only affects the hair on the body part where the
        radiation is aimed. For example, if you have radiation therapy to the pelvis, you could lose pubic hair. Hair
        loss depends on the dose and method of radiation therapy. It usually grows back after several months, but it may
        be thinner or a different texture. With very high doses of radiation therapy, hair may not grow back.{' '}
      </Text>
      <Text marginTop="1rem">
        Hair loss is different for everyone. You might lose all your hair or only sections of it. It might come out
        slowly over time or become thin. Or you might simply notice that your hair is dryer and duller. Lost hair
        usually grows back after cancer and treatment. But sometimes, hair stays thin.
      </Text>
      <Text marginTop="1rem">
        Hair loss can be challenging regarding both your physical appearance and emotionally. Managing side effects is
        an important part of your cancer care and treatment. It is called palliative care or supportive care. Talk with
        your health care team about coping with hair loss.
      </Text>
      <Text marginTop="1rem"></Text>
      <VStack align="flex-start">
        <Text marginTop="1rem" fontWeight="bold">
          Managing your hair loss
        </Text>
        <Text marginTop="1rem">
          Losing your hair can cause more than a change in your physical appearance. It can be an emotional challenge
          that affects your self-image and quality of life. It is important to be kind to yourself during this stressful
          time.
        </Text>
        <Text marginTop="1rem" marginBottom="1rem">
          People cope with hair loss in different ways. Thinking about how you feel most comfortable in managing hair
          loss before, during, and after treatment may help. And, your choices may change over time.
        </Text>
        <UnorderedList pl={4}>
          <ListItem>
            Talking about your feelings with a counselor, a family member, or a friend may provide comfort. It may also
            be helpful to connect with other people who have experienced hair loss, such as through an online support
            group, and find out what worked best for them in coping with it.
          </ListItem>
          <ListItem>
            It may be helpful to prepare your family and friends about you possibly losing hair. This is especially true
            for children. They may feel less fearful and anxious if the change in your appearance is something they
            expect. This, in turn, can help you feel better.
          </ListItem>
          <ListItem>
            You may choose to cut your hair shorter. A shorter hairstyle may make thin hair look fuller. Any hair loss
            may also look less dramatic. And when your hair starts growing back, it takes less time to grow into the
            shorter hairstyle.
          </ListItem>
          <ListItem>
            Some people decide to shave their head in advance or once hair loss begins. This can help wigs or other head
            coverings fit better. Hairdressers can help with this.
          </ListItem>
          <ListItem>
            If you want to wear a scarf, hat, or other head coverings, get some of those items in advance. This can make
            you feel more prepared for when hair loss starts happening. Select those made from soft materials that don't
            itch. It may be helpful to have items in both lighter and heavier materials, for your comfort and different
            temperatures.
          </ListItem>
          <ListItem>
            Some people choose to not cover their thinning hair or bald head, finding it more comfortable or easier to
            manage in daily life.
          </ListItem>
        </UnorderedList>
      </VStack>
      <VStack align="flex-start">
        <Text marginTop="1rem" fontWeight="bold">
          Oral Care
        </Text>
        <Text marginTop="1rem" marginBottom="1rem">
          Cancer treatment can cause mouth and throat problems.The most common oral complications may be caused by
          either chemotherapy or radiation therapy. These include the following:
        </Text>
        <UnorderedList pl={4}>
          <ListItem>Inflamed mucous membranes in the mouth.</ListItem>
          <ListItem>Infections in the mouth or that travel through the bloodstream. </ListItem>
          <ListItem>Taste changes.</ListItem>
          <ListItem>Dry mouth.</ListItem>
          <ListItem>Pain.</ListItem>
          <ListItem>Changes in dental growth and development in children.</ListItem>
          <ListItem>
            Malnutrition (not getting enough of the nutrients the body needs to be healthy) caused by being unable to
            eat.
          </ListItem>
          <ListItem>
            Dehydration (not getting the amount of water the body needs to be healthy) caused by being unable to drink.
          </ListItem>
          <ListItem>Tooth decay and gum disease.</ListItem>
        </UnorderedList>
        <Text marginTop="1rem">Good dental hygiene may help prevent or decrease complications.</Text>
        <Text marginTop="1rem">
          It is important to keep a close watch on oral health during cancer treatment. This helps prevent, find, and
          treat complications as soon as possible. Keeping the mouth, teeth, and gums clean during and after cancer
          treatment may help decrease complications such as cavities, mouth sores, and infections.
        </Text>
        <Text marginTop="1rem">
          Everyday oral care for cancer patients includes keeping the mouth clean and being gentle with the tissue
          lining the mouth.
        </Text>
        <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
          Oral care during radiation therapy includes the following:
        </Text>
        <UnorderedList pl={4}>
          <ListItem>
            <Text fontWeight="bold">Brushing teeth</Text>
          </ListItem>
          <UnorderedList pl={4}>
            <ListItem>
              Brush teeth and gums with a soft-bristle brush 2 to 3 times a day for 2 to 3 minutes. Be sure to brush the
              area where the teeth meet the gums and to rinse often.
            </ListItem>
            <ListItem>
              Rinse the toothbrush in hot water every 15 to 30 seconds to soften the bristles, if needed.
            </ListItem>
            <ListItem>
              Use a foam brush only if a soft-bristle brush cannot be used. Brush 2 to 3 times a day and use an
              antibacterial rinse. Rinse often.
            </ListItem>
            <ListItem>Let the toothbrush air-dry between brushings.</ListItem>
            <ListItem>
              Use a fluoride toothpaste with a mild taste. Flavoring may irritate the mouth, especially mint flavoring.
            </ListItem>
            <ListItem>
              If toothpaste irritates your mouth, brush with a mixture of 1/4 teaspoon of salt added to 1 cup of water.
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Text fontWeight="bold">Rinsing</Text>
          </ListItem>
          <UnorderedList lp={4}>
            <ListItem>
              Use a rinse every 2 hours to decrease soreness in the mouth. Dissolve 1/4 teaspoon of salt and 1/4
              teaspoon of baking soda in 1 quart of water.
            </ListItem>
            <ListItem>
              An antibacterial rinse may be used 2 to 4 times a day for gum disease. Rinse for 1 to 2 minutes.
            </ListItem>
            <ListItem>
              If dry mouth occurs, rinsing may not be enough to clean the teeth after a meal. Brushing and flossing may
              be needed.
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Text fontWeight="bold">Flossing</Text>
          </ListItem>
          <UnorderedList lp={4}>
            <ListItem>Floss gently once a day.</ListItem>
          </UnorderedList>
          <ListItem>
            <Text fontWeight="bold">Lip care</Text>
          </ListItem>
          <UnorderedList lp={4}>
            <ListItem>Use lip care products, such as cream with lanolin, to prevent drying and cracking.</ListItem>
          </UnorderedList>
          <ListItem>
            <Text fontWeight="bold">Denture care</Text>
          </ListItem>
          <UnorderedList lp={4}>
            <ListItem>
              Brush and rinse dentures every day. Use a soft-bristle toothbrush or one made for cleaning dentures.
            </ListItem>
            <ListItem>Clean with a denture cleaner recommended by your dentist.</ListItem>
            <ListItem>
              Keep dentures moist when not being worn. Place them in water or a denture soaking solution recommended by
              your dentist. Do not use hot water, which can cause the denture to lose its shape.
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </VStack>
      <VStack align="flex-start">
        <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold"></Text>
        <UnorderedList pl={4}></UnorderedList>
      </VStack>
      <VStack align="flex-start">
        <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold"></Text>
        <UnorderedList pl={4}></UnorderedList>
      </VStack>
      <VStack align="flex-start">
        <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold"></Text>
        <UnorderedList pl={4}></UnorderedList>
      </VStack>
      <br />
    </>
  );
}
