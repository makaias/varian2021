import {Button} from '@chakra-ui/button';
import {HStack, Text, VStack} from '@chakra-ui/layout';
import {useToast} from '@chakra-ui/toast';
import React, {ReactElement, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import {useLayoutConfig} from '../app/layout';
import QuestionRouter from '../components/survay/QuestionRouter';
import useEndpoint from '../hooks/useEndpoint';
import {Survey as SurveyModel} from '../model/Survey';
import callJsonEndpoint from '../util/api/callJsonEndpoint';

interface Props {}

export default function Survey({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'fancy',
    title: 'Survey',
  });
  const step = 1;
  const [responses, setResponses] = useState([]);
  const [begin, setBegin] = useState(0);

  const {id} = useParams<{id: string}>();
  const history = useHistory();
  const toast = useToast();

  const handleContinue = async () => {
    if (begin + step >= questions.length) {
      try {
        await callJsonEndpoint({
          conf: {
            url: `/patients/surveys/fill/${id}`,
            data: responses,
            method: 'POST',
          },
        });
        toast({
          title: 'Survey filled',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        history.push('/profile');
      } catch (err) {
        toast({
          title: 'Error',
          description: err.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } else setBegin(Math.min(begin + step, questions.length - 1));
  };

  // load survey
  const usedEndpoint = useEndpoint<SurveyModel>({
    conf: {
      url: `/patients/surveys/${id}`,
    },
    deps: [id],
  });
  const questions = usedEndpoint.data?.survey_template?.questions;

  // create responses array for survey
  useEffect(() => {
    setResponses(usedEndpoint.data && Array(usedEndpoint.data.survey_template.questions.length).fill(null));
  }, [usedEndpoint.data]);

  console.log(begin, responses, questions);

  return (
    <>
      {usedEndpoint.succeeded && (
        <VStack align="stretch" marginTop="1rem">
          <Text textAlign="center">
            This questionnaire will help us understand your current condition. Please click on the circle that best
            describes your condition in the past fiew days.
          </Text>
          {questions?.slice(begin, begin + step).map((x, index) => (
            <QuestionRouter
              question={x}
              number={begin + index + 1}
              key={`${x.__component}-${x.id}`}
              onChange={(v) => setResponses(responses.map((ov, i) => (i == begin + index ? v : ov)))}
            />
          ))}
          <HStack justify="space-between">
            <Button colorScheme="primary" onClick={() => setBegin(Math.max(begin - step, 0))}>
              Previous
            </Button>
            <Button
              colorScheme="primary"
              disabled={responses.slice(begin, begin + step).includes(null)}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </HStack>
        </VStack>
      )}
      <br />
    </>
  );
}
