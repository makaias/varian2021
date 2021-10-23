import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';
import UniformGrid from '../components/UniformGrid';

interface Props {}

export default function MentalHealth({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Mental health',
  });
  return (
    <>
      <Text marginTop="1rem">
        People value the care they get from their cancer care team, but many also want to take an active role in
        managing their illness. But distress can be hard for some people to manage on their own. Don't hesitate to talk
        to the cancer care team when you're feEeling distress that's hard to handle. Remember that every person is
        different, and you can work with your cancer care team to find the best action to take based on your own
        situation.
      </Text>
      <Text marginTop="1rem">
        Here are some thoughts from experts about managing distress that include tips that might be helpful (the Do’s)
        and some actions that could be harmful (the Don’ts).
      </Text>
      <UniformGrid columns={[1, 1, 2]} gap={4} columnGap={7}>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Do
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Rely on ways of coping that have helped you solve problems and crises in the past. Know that almost
              everyone needs to have people around them they can count on to help when needed. Find someone you feel
              comfortable talking with about your illness. When you would rather not talk, you may find that relaxation,
              meditation, listening to music, or other things that calm you are helpful. Use whatever has worked for you
              before, but if what you’re doing isn’t working, find a different way to cope, or get professional help.
            </ListItem>
            <ListItem>
              Deal with cancer “one day at a time.” Try to leave worries about the future behind. The task of coping
              with cancer often seems less overwhelming when you break it up into “day bites,” which are easier to
              manage. This also allows you to focus on getting the most out of each day in spite of your illness.
            </ListItem>
            <ListItem>
              Use support and self-help groups if they make you feel better. Leave any group that makes you feel worse.
            </ListItem>
            <ListItem>
              Find a doctor who lets you ask all your questions. Make sure there’s a feeling of mutual respect and
              trust. Insist on being a partner in your treatment. Ask what side effects you should expect and be
              prepared for them. Knowing what problems may come often makes it easier to handle them if and when they
              happen.
            </ListItem>
            <ListItem>
              Explore spiritual and religious beliefs and practices, such as prayer, that may have helped you in the
              past. If you don’t think of yourself as a religious or spiritual person, get support from any belief
              systems that you value. This may comfort you and even help you find meaning in the experience of your
              illness.
            </ListItem>
            <ListItem>
              Keep personal records of your doctors’ numbers, dates of treatments, lab values, x-rays, scans, symptoms,
              side effects, medicines, and general medical status. Information about the cancer and your treatment is
              important to have, and no one can keep it better than you.
            </ListItem>
            <ListItem>
              Keep a journal if you need to express yourself without holding back. It can help you process the journey,
              and you may be amazed by how helpful it can be.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Don't
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Believe the old saying that “cancer equals death.” There are more than 16 million people alive in the US
              today who have had cancer.
            </ListItem>
            <ListItem>
              Blame yourself for causing cancer. There’s no scientific proof linking certain personalities, emotional
              states, or painful life events to getting cancer. Even if you may have raised your cancer risk through
              unhealthy habits, it does not help to blame yourself or beat yourself up.
            </ListItem>
            <ListItem>
              Feel guilty if you can’t keep a positive attitude all the time. Low periods will come, no matter how great
              you are at coping. There is no proof that those times have a bad effect on your health or tumor growth.
              But if they become frequent or severe, get help.
            </ListItem>
            <ListItem>
              Suffer in silence. Don’t try to go it alone, Get support from your family, loved ones, friends, doctor,
              clergy, or those you meet in support groups who understand what you’re going through. You will likely cope
              better and take better care of yourself with people around who care about you and can help encourage and
              support you.
            </ListItem>
            <ListItem>
              Be embarrassed or ashamed to get help from a mental health expert for anxiety or depression that disrupts
              your sleep, eating, ability to concentrate, ability to function normally, or if you feel your distress is
              getting out of control.
            </ListItem>
            <ListItem>
              Keep your worries or symptoms (physical or psychological) secret from the person closest to you. Ask this
              person to come with you to appointments and talk about your treatment. Research shows that people don’t
              often hear or absorb information when they are very anxious. A close friend or family member can help you
              recall and interpret what was said. They can be sure you tell the cancer care team about any changes or
              new concerns, too. As a practical matter, your friend or loved one can also help you get home from a
              doctor’s visit or medical test.
            </ListItem>
            <ListItem>
              Abandon your regular treatment for an alternative therapy. If you use treatments that your doctor didn’t
              recommend, use only those that you know do no harm. Find out if the treatment can be safely used along
              with your regular therapies (as a complementary therapy) to improve your quality of life. Be sure to tell
              your doctor which treatments you are using along with medical treatment, since some should not be used
              during chemo or radiation treatments. Discuss the pros and cons of any alternative or complementary
              therapies with someone you can trust to look at them more objectively than you may be able to when you are
              under stress. Psychological, social, and spiritual approaches are often helpful and safe, and doctors
              generally encourage their use.
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align="flex-start">
          <Text marginTop="1rem" marginBottom="1rem" fontWeight="bold">
            Other ways to help manage distress
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Support groups and counseling</ListItem>
            <ListItem>Social services</ListItem>
            <ListItem>Relaxation, meditation, creative therapies</ListItem>
            <ListItem>Spiritual support</ListItem>
            <ListItem>Exercise</ListItem>
            <ListItem>Mental health services</ListItem>
            <ListItem>Medication</ListItem>
          </UnorderedList>
        </VStack>
      </UniformGrid>
    </>
  );
}
