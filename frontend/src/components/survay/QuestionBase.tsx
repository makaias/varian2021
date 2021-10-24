import {Flex, Text, VStack} from '@chakra-ui/layout';
import React, {PropsWithChildren, ReactElement} from 'react';
import {SurveyQuestion} from '../../model/SurveyTemplate';

interface Props {
  question: SurveyQuestion;
  number: number;
}

export default function QuestionBase({question, children, number}: PropsWithChildren<Props>): ReactElement {
  return (
    <Flex padding={4} borderRadius={12} border="1px solid" bg="white" borderColor="primary.500">
      <VStack align="stretch" width="100%">
        <Text>
          {number}. {question.text}
        </Text>
        {children}
      </VStack>
    </Flex>
  );
}
