import {ListItem, Text, UnorderedList} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {useLayoutConfig} from '../app/layout';

interface Props {}

export default function Pelvis({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Pelvis',
  });
  return (
    <>
      <Text marginTop="1rem" fontWeight="bold">
        Urinary Incontinence
      </Text>
      <Text marginTop="1rem">
        Some cancer and cancer treatments can make it difficult to control your bladder. This means you may sometimes
        leak urine or not be able to control when you urinate. The medical term for this problem is urinary
        incontinence.
      </Text>
      <Text marginTop="1rem" fontWeight="bold">
        How is incontinence treated?
      </Text>
      <UnorderedList lp={4}>
        <ListItem>
          Bladder training: Bladder training is a way to treat incontinence without medication. Health care providers
          may start with bladder training before trying other treatment options. Bladder training, sometimes called
          bladder retraining, can include these steps:
        </ListItem>
        <UnorderedList lp={4}>
          <ListItem>Learning to wait to urinate, even after you have the urge to go</ListItem>
          <ListItem>Going to the bathroom at specific times</ListItem>
          <ListItem>Controlling how much and when you drink and eat</ListItem>
          <ListItem>Biofeedback, which uses a small device to learn to control the muscles that hold urine</ListItem>
        </UnorderedList>
        <ListItem>
          Physical therapy: Working with a physical therapist can help you control your bladder. During physical
          therapy, you may do Kegel exercises to help strengthen the muscles that hold in urine. Electrical stimulation
          can also be used to strengthen muscles.
        </ListItem>
        <ListItem>Medication: Medication that can help control your bladder</ListItem>
        <ListItem>
          Medical devices: There are medical devices that can help with bladder problems. One example is a pessary,
          which is worn in the vagina to support the bladder.
        </ListItem>
        <ListItem>
          Estrogen cream.: A vaginal cream with a low dose of estrogen can help with damage caused by menopause.
        </ListItem>
        <ListItem>
          Surgery: In some cases, surgery may be needed. During surgery, a sling is placed around the bladder and
          urethra to keep them closed. Urine flows through the urethra after leaving the bladder.
        </ListItem>
        <ListItem>
          Using a catheter: You can place a small, thin tube called a catheter through the urethra and into the bladder.
          This can help control leaks.
        </ListItem>
      </UnorderedList>
      <Text marginTop="1rem" fontWeight="bold">
        Menopausal Symptoms
      </Text>
      <Text marginTop="1rem">
        Some cancer treatments can cause early or sudden menopause. If this happens, talk with your health care team
        about treatments to help your body adjust.
      </Text>
      <Text marginTop="1rem">How do I know if I might be going through menopause after cancer treatment?</Text>
      <UnorderedList lp={4}>
        <ListItem>
          Hot flashes. Your face, chest, and other areas might suddenly get very hot and sweaty. You might feel your
          face getting red. Hot flashes usually last just a few minutes.
        </ListItem>
        <ListItem>Night sweats. You might wake up soaked in sweat.</ListItem>
        <ListItem>
          Genital and urinary problems. These can include vaginal and vulvar dryness, itching or irritation, painful
          sex, urinary frequency or urgency, urinary leaks, and more frequent urinary tract infections.
        </ListItem>
        <ListItem>
          Vaginal problems. These can include dryness, painful sex, itching, irritation, and fluid (discharge) from your
          vagina.
        </ListItem>
        <ListItem>
          Bladder problems. You might leak urine, need to go more often than usual, or have trouble waiting until you
          can get to a bathroom. You might also get urinary tract infections.
        </ListItem>
        <ListItem>
          Mood changes. These can include feeling depressed, irritable, or anxious. You might also have mood swings.
        </ListItem>
        <ListItem>
          Sleep problems. The other symptoms of menopause can make sleeping difficult. Depression and anxiety related to
          menopause may also cause sleeplessness.
        </ListItem>
      </UnorderedList>
      <Text marginTop="1rem">Coping with menopause from cancer treatment:</Text>
      <UnorderedList lp={4}>
        <ListItem>
          Hot flashes. Hot flashes are caused by hormonal changes in your body. There are prescription hormonal and
          non-hormonal medications you can take to help with hot flashes.
        </ListItem>
        <ListItem>
          Thinner bones (osteoporosis). You might need an X-ray called a bone density test. This test measures how thick
          your bones are in certain places, usually your hips and spine. This tells your health care provider if your
          cancer treatment is making your bones thinner.
        </ListItem>
        <ListItem>
          Changes to your vulva, vagina, and bladder. There are several different ways to treat a dry or sensitive vulva
          and vagina. These treatments can also help with bladder problems such as urinary frequency and urgency.
        </ListItem>
      </UnorderedList>
    </>
  );
}
