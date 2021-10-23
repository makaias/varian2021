import {Button} from '@chakra-ui/button';
import {HStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import QuestionBase from './QuestionBase';
import {QuestionData} from './QuestionData';

interface YesNoQuestionData extends QuestionData {
  type: 'yesno';
  yesValue: number;
  noValue: number;
}

interface Props {
  question: YesNoQuestionData;
  onChange?: (value: number) => void;
}

export default function QuestionYesNo({question, onChange}: Props): ReactElement {
  return (
    <QuestionBase question={question}>
      <HStack pt={2} justify="space-evenly">
        <Button
          colorScheme="primary"
          minWidth="5rem"
          onClick={() => {
            if (onChange) onChange(question.noValue);
          }}
        >
          No
        </Button>
        <Button
          colorScheme="primary"
          minWidth="5rem"
          onClick={() => {
            if (onChange) onChange(question.yesValue);
          }}
        >
          Yes
        </Button>
      </HStack>
    </QuestionBase>
  );
}
