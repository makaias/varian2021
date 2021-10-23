import {Container} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import QuestionYesNo from '../components/quiz/QuestionYesNo';

interface Props {}

export default function QuizTest({}: Props): ReactElement {
  return (
    <Container>
      <QuestionYesNo
        onChange={(v) => console.log(v)}
        question={{
          questionNumber: 1,
          text: 'How much were you able to acomplish your daily activity?',
          type: 'yesno',
          noValue: 0,
          yesValue: 1,
        }}
      />
    </Container>
  );
}
