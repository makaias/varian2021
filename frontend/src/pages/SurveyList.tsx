import {Button} from '@chakra-ui/button';
import {Box, Divider, Flex, Heading, HStack, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {useLayoutConfig} from '../app/layout';
import Spinner from '../components/Spinner';
import {useAuthBackend} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
import {Survey} from '../model/Survey';
import {SurveyTemplate} from '../model/SurveyTemplate';

interface Props {
}

function SurveyTemplates() {
  const usedEndpoint = useEndpoint<SurveyTemplate[]>({
    conf: {
      url: '/doctors/survey-templates',
      method: 'GET'
    },
    enableRequest: true
  });
  const templates = usedEndpoint.data;

  if (usedEndpoint.pending) return <Spinner />;
  if (usedEndpoint.failed) return <>failed</>;
  if (usedEndpoint.succeeded)
    return (
      <>
        <HStack marginTop='1rem' justify='space-between'>
          <Button colorScheme='primary' as={Link} to='/survey-template'>
            Create new survey
          </Button>
        </HStack>
        <VStack align='stretch'>
          {templates?.map((x) => (
            <Box borderTop='1px' borderColor='primary.500' padding='1rem'>
              <Link to={`/survey-template/${x.id}`}>
                <Flex>{x.name}</Flex>
              </Link>
            </Box>
          ))}
        </VStack>
      </>
    );

  return null;
}

function UnconfirmedSurveys() {
  const usedEndpoint = useEndpoint<Survey[]>({
    conf: {
      url: '/patients/surveys',
      method: 'GET'
    },
    enableRequest: true
  });
  const templates = usedEndpoint.data;

  if (usedEndpoint.pending) return <Spinner />;
  if (usedEndpoint.failed) return <>failed</>;
  if (usedEndpoint.succeeded)
    return (
      <>
        <VStack align='stretch' py={6}>
          {templates?.map((survey) => (
            <Box key={survey.id} borderTop='1px' borderColor='primary.500' padding='1rem'>
              <Link to={`/survey/${survey.id}`}>
                <HStack justify="space-between">
                  <Flex>{survey.survey_template.name}</Flex>
                  <Flex>{new Date(survey['created_at'])?.toString?.()}</Flex>
                </HStack>
              </Link>
            </Box>
          ))}
          {!templates?.length && <Text textAlign='center'>All survey filled</Text>}
        </VStack>
      </>
    );

  return null;
}

export default function SurveyList({}: Props): ReactElement {
  const {user} = useAuthBackend();
  {
    user?.userType === 'DOCTOR' && useLayoutConfig({title: 'Survey templates', bg: 'plain'});
    user?.userType === 'PATIENT' && useLayoutConfig({title: 'Surveys', bg: 'plain'});
  }

  return (
    <VStack align='stretch'>
      {user?.userType === 'DOCTOR' && <SurveyTemplates />}
      {user?.userType === 'PATIENT' && <UnconfirmedSurveys />}
    </VStack>
  );
}
