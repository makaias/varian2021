import {HStack} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import React, {ReactElement, useEffect, useState} from 'react';
import {YesNoQuestion} from '../../model/SurveyTemplate';
import QuestionBase from './QuestionBase';

interface Props {
  question: YesNoQuestion;
  onChange?: (value: number) => void;
  number: number;
}

export default function QuestionYesNo({question, onChange, number}: Props): ReactElement {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (selectedOption == 'yes' && onChange) onChange(question.yesValue);
    if (selectedOption == 'no' && onChange) onChange(question.noValue);
  }, [selectedOption]);

  return (
    <QuestionBase question={question} number={number}>
      <RadioGroup onChange={(e) => setSelectedOption(e)} value={selectedOption}>
        <HStack pt={2} justify="space-evenly">
          <Radio value="no">No</Radio>
          <Radio value="yes">Yes</Radio>
        </HStack>
      </RadioGroup>
    </QuestionBase>
  );
}
