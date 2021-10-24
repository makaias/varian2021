import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import UniformGrid from '../components/UniformGrid';

interface Props {}

export default function PhysicalActivity({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Physical activity',
  });
  return (
    <>
      <Text marginTop="1rem">
        Research shows that for most people exercise is safe and helpful before, during, and after cancer treatment. It
        can help improve your quality of life as well as the energy you have to do the things you like. Physical
        activity may also help you cope with side effects of treatment and possibly decrease your risk of new cancers in
        the future.
      </Text>
      <Text marginTop="1rem">
        Too much time spent resting or sitting can cause loss of body function, muscle weakness, and reduced range of
        motion. Many cancer care teams are urging their patients to be as physically active as possible before, during
        and after cancer treatment.
      </Text>
      <UniformGrid columns={[1, 1, 2]} gap={4} columnGap={7}>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            How exercise may help you
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Help your body and brain work better</ListItem>
            <ListItem>Reduce feeling tired (fatigue)</ListItem>
            <ListItem>Help lessen depression and anxiety</ListItem>
            <ListItem>Might help you sleep better</ListItem>
            <ListItem>Keep or improve your physical ability to get things done</ListItem>
            <ListItem>Improve your muscle strength, bone health and range of motion</ListItem>
            <ListItem>Strengthen your immune system</ListItem>
            <ListItem>Increase your appetite</ListItem>
            <ListItem>Help you get to and maintain a healthy weight</ListItem>
            <ListItem>Decrease the chance that some types of cancer will come back</ListItem>
            <ListItem>Improve your quality of life</ListItem>
            <ListItem>Reduce treatment side effects</ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            General physical activity recommendations
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Avoid inactivity and return to normal daily activities as soon as possible after diagnosis and treatment.
            </ListItem>
            <ListItem>Take part in regular physical activity.</ListItem>
            <ListItem>Start slowly and build up the amount of physical activity over time.</ListItem>
            <ListItem>
              Build up to at least 150 minutes of moderate or 75 minutes of vigorous intensity activity each week.
            </ListItem>
            <ListItem>Exercise several times a week for at least 10 minutes at a time.</ListItem>
            <ListItem>Include resistance training exercise at least 2 days per week.</ListItem>
            <ListItem>Do stretching exercises at least 2 days each week.</ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Tips to help you stick to your exercise program
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Set short-term and long-term goals.</ListItem>
            <ListItem>Focus on having fun.</ListItem>
            <ListItem>Do something different to keep it fresh. Try yoga, dancing, or tai chi.</ListItem>
            <ListItem>
              Ask for support from others, or get friends, family, and co-workers to exercise with you.
            </ListItem>
            <ListItem>Use charts or a fitness tracker to record your exercise progress.</ListItem>
            <ListItem>Recognize and reward your achievements.</ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Planning to be more active
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Stay away from uneven surfaces that could make you fall</ListItem>
            <ListItem>If you plan to exercise outside, find someplace safe and well-lit</ListItem>
            <ListItem>
              If you are more at risk for infection, you may need to stay away from public gyms and crowds until your
              risk returns to normal.
            </ListItem>
            <ListItem>
              If you want to swim while getting radiation therapy, check with your radiation therapy team. If you don’t
              have any skin irritation or sores, you should be able to swim. Be sure to rinse off after getting out of a
              pool to lower the chance of skin irritation.
            </ListItem>
            <ListItem>
              Take someone with you when you exercise or make sure someone knows where you are in case you have trouble.
              It can also help to carry a mobile phone.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Start slowly
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Even if you can only be active for a few minutes a day it will help you. Increase slowly how often and how
              long you exercise. Your muscles will tell you when you need to slow down and rest or can do more.
            </ListItem>
            <ListItem>
              Exercise as you are able. Don’t push yourself while you are in treatment. Listen to your body and rest
              when you need to. If you feel very tired you can try doing 10 minutes of light exercises each day and
              build up.
            </ListItem>
            <ListItem>Do not exercise if you feel dizzy or are unsteady on your feet.</ListItem>
            <ListItem>
              Try short periods of exercise with frequent rest breaks. For example, walk briskly for a few minutes, slow
              down, and walk briskly again, until you have done 30 minutes of brisk activity. You can also divide your
              activity into three 10-minute sessions. You’ll still get the benefit of the exercise.
            </ListItem>
            <ListItem>
              Do not exercise above a moderate level of exertion without talking with your doctor. Moderate exertion is
              about as much effort as a brisk walk.
            </ListItem>
            <ListItem>
              Avoid any activity that puts you at risk for falls or injury. If you notice swelling, pain, dizziness, or
              blurred vision, call your doctor right away.
            </ListItem>
            <ListItem>
              If you have numbness in your feet or problems with balance, you are at higher risk for falls. Ask about
              devices that might help you.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Special issues
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Drink plenty of fluids unless you’ve been told not to.</ListItem>
            <ListItem>
              If you have a catheter or feeding tube, avoid pool, lake, or ocean water and other exposures that may
              cause infections. Don’t play contact sports. Also, do not do resistance training that uses muscles in the
              area of the catheter to keep it from dislodging. Talk with your cancer team about what’s safe for you.
            </ListItem>
            <ListItem>
              Do not use heavy weights or do exercises that puts too much stress on your bones if you have osteoporosis,
              cancer that has spread to the bone, arthritis, nerve damage, poor vision, poor balance, or weakness. You
              may be more likely to hurt yourself or break a bone.
            </ListItem>
          </UnorderedList>
        </VStack>
      </UniformGrid>
      <br />
    </>
  );
}
