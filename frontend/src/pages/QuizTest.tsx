import {Container} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import QuestionYesNo from '../components/survay/QuestionYesNo';

interface Props {}

export default function QuizTest({}: Props): ReactElement {
  return (
    <Container>
      <QuestionYesNo
        onChange={(v) => console.log(v)}
        question={{
          id: 1,
          target: 'LIFE',
          text: 'How much were you able to acomplish your daily activity?',
          __component: 'survey.yes-no-question',
          noValue: 0,
          yesValue: 1,
        }}
        number={1}
      />
    </Container>
  );
}
