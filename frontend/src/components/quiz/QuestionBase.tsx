import {Flex, Text, VStack} from '@chakra-ui/layout';
import React, {PropsWithChildren, ReactElement} from 'react';
import {QuestionData} from './QuestionData';

interface Props {
  question: QuestionData;
}

export default function QuestionBase({question, children}: PropsWithChildren<Props>): ReactElement {
  return (
    <Flex padding={4} borderRadius={12} border="1px solid" borderColor="">
      <VStack align="stretch" width="100%">
        <Text>
          {question.questionNumber}. {question.text}
        </Text>
        {children}
      </VStack>
    </Flex>
  );
}
