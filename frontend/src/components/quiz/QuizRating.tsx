import { Flex, Text, VStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { QuestionData } from "./QuestionData";

interface RatingQuestionData extends QuestionData {
  type: "rating";
}

interface Props {
  question: RatingQuestionData;
}

export default function QuizRating({ question }: Props): ReactElement {
  return (
    <Flex>
      <VStack>
        <Text>{}</Text>
      </VStack>
    </Flex>
  );
}
