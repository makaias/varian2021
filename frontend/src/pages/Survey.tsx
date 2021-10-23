import {VStack} from '@chakra-ui/layout';
import React, {ReactElement, useEffect, useState} from 'react';
import {useParams} from 'react-router';
import QuestionRouter from '../components/survay/QuestionRouter';
import useEndpoint from '../hooks/useEndpoint';
import {Survey as SurveyModel} from '../model/Survey';

interface Props {}

export default function Survey({}: Props): ReactElement {
  const {id} = useParams<{id: string}>();

  const [responses, setResponses] = useState([]);

  const usedEndpoint = useEndpoint<SurveyModel>({
    conf: {
      url: `/patients/surveys/${id}`,
    },
    deps: [id],
  });

  useEffect(() => {
    setResponses(usedEndpoint.data && Array(usedEndpoint.data.survey_template.questions.length).fill(null));
  }, [usedEndpoint.data]);

  return (
    <>
      {usedEndpoint.succeeded && (
        <VStack align="stretch">
          {usedEndpoint.data.survey_template.questions.map((x, index) => (
            <QuestionRouter
              question={x}
              number={index + 1}
              key={x.id}
              onChange={(v) => setResponses(responses.map((ov, i) => (i == index ? v : ov)))}
            />
          ))}
        </VStack>
      )}
    </>
  );
}
