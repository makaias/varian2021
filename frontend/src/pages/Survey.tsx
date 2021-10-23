import {Button} from '@chakra-ui/button';
import {Flex, HStack, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement, useEffect, useState} from 'react';
import {useParams} from 'react-router';
import QuestionRouter from '../components/survay/QuestionRouter';
import useEndpoint from '../hooks/useEndpoint';
import {Survey as SurveyModel} from '../model/Survey';

interface Props {}

export default function Survey({}: Props): ReactElement {
  const {id} = useParams<{id: string}>();

  const [responses, setResponses] = useState([]);
  const [begin, setBegin] = useState(0);
  const goBack = () => {
    setBegin(Math.max(begin - 5, 0));
  };
  const updateBegin = () => {
    if (responses.slice(begin, begin + 5).includes(null)) {
      return;
    }
    setBegin(begin + 5);
    if (begin >= usedEndpoint.data.survey_template.questions.length) {
      // todo: send response
    }
  };
  const usedEndpoint = useEndpoint<SurveyModel>({
    conf: {
      url: `/patients/surveys/${id}`,
    },
    deps: [id],
  });

  useEffect(() => {
    setResponses(usedEndpoint.data && Array(usedEndpoint.data.survey_template.questions.length).fill(null));
  }, [usedEndpoint.data]);
  console.log(begin);
  return (
    <>
      {usedEndpoint.succeeded && (
        <VStack align="stretch">
          <Text textAlign="center">
            This questionnaire will help us understand your current condition. Please click on the circle that best
            describes your condition in the past fiew days.
          </Text>
          {usedEndpoint.data.survey_template.questions.slice(begin, begin + 5).map((x, index) => (
            <QuestionRouter
              question={x}
              number={index + 1}
              key={x.id}
              onChange={(v) => setResponses(responses.map((ov, i) => (i == index ? v : ov)))}
            />
          ))}
          <HStack justify="space-between">
            <Button colorScheme="primary" onClick={goBack}>
              Previous
            </Button>
            <Button
              colorScheme="primary"
              disabled={responses.slice(begin, begin + 5).includes(null)}
              onClick={updateBegin}
            >
              Continue
            </Button>
          </HStack>
        </VStack>
      )}
    </>
  );
}
