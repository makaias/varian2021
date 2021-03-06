import {Flex, HStack, Text, VStack} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import React, {ReactElement, useEffect, useState} from 'react';
import {RatingQuestion} from '../../model/SurveyTemplate';
import QuestionBase from './QuestionBase';

interface Props {
  question: RatingQuestion;
  onChange?: (value: number) => void;
  number: number;
}

export default function QuestionRating({question, onChange, number}: Props): ReactElement {
  const [option, setOption] = useState('');

  useEffect(() => {
    if (onChange && question.options[option]) onChange(question.options[option].value);
  }, [option]);

  return (
    <QuestionBase question={question} number={number}>
      <Flex justify="center">
        <HStack spacing={8} align="flex-end">
          <Text fontSize="sm">{question.minLabel}</Text>
          <RadioGroup onChange={(e) => setOption(e)} value={option}>
            <HStack spacing={4}>
              {new Array(question.options.length).fill(0).map((_, index) => (
                <VStack>
                  <Text>{index + 1}</Text>
                  <Radio value={index.toString()}></Radio>
                </VStack>
              ))}
            </HStack>
          </RadioGroup>
          <Text fontSize="sm">{question.maxLabel}</Text>
        </HStack>
      </Flex>
    </QuestionBase>
  );
}
