import { Flex, Text, VStack } from "@chakra-ui/layout";
import React, { PropsWithChildren, ReactElement } from "react";
import { QuestionData } from "./QuestionData";

interface Props {
  question: QuestionData;
}

export default function QuizBase({
  question,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <Flex padding={4} borderRadius={4} border="1px solid" borderColor="">
      <VStack>
        <Text>
          {question.questionNumber}. {question.text}
        </Text>
      </VStack>
    </Flex>
  );
}
