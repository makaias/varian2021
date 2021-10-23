import {Container} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import QuestionRating from '../components/quiz/QuestionRating';

interface Props {}

export default function QuizTest({}: Props): ReactElement {
  return (
    <Container>
      <QuestionRating
        question={{
          questionNumber: 1,
          text: 'How much were you able to acomplish your daily activity?',
          type: 'rating',
          minLabel: 'not at all',
          maxLabel: 'very much',
          values: [-2, -1, 0, 1, 2, 3],
        }}
      />
    </Container>
  );
}
