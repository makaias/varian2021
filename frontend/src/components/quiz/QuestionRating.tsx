import {Flex, HStack, Text, VStack} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import React, {ReactElement, useEffect, useState} from 'react';
import QuestionBase from './QuestionBase';
import {QuestionData} from './QuestionData';

interface RatingQuestionData extends QuestionData {
  type: 'rating';
  minLabel: string;
  maxLabel: string;
  values: number[];
}

interface Props {
  question: RatingQuestionData;
  onChange?: (value: number) => void;
}

export default function QuestionRating({question, onChange}: Props): ReactElement {
  const [option, setOption] = useState('');

  useEffect(() => {
    if (onChange) onChange(question.values[option]);
  }, [option]);

  return (
    <QuestionBase question={question}>
      <Flex justify="center">
        <HStack spacing={8} align="flex-end">
          <Text fontSize="sm">{question.minLabel}</Text>
          <RadioGroup onChange={(e) => setOption(e)} value={option}>
            <HStack spacing={4}>
              {new Array(question.values.length).fill(0).map((_, index) => (
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
