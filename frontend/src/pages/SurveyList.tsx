import {Button} from '@chakra-ui/button';
import {Flex, Heading, HStack, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {useLayoutConfig} from '../app/layout';
import Spinner from '../components/Spinner';
import {useAuthBackend} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
import {Survey} from '../model/Survey';
import {SurveyTemplate} from '../model/SurveyTemplate';

interface Props {}

function SurveyTemplates() {
  const usedEndpoint = useEndpoint<SurveyTemplate[]>({
    conf: {
      url: '/doctors/survey-templates',
      method: 'GET',
    },
    enableRequest: true,
  });
  const templates = usedEndpoint.data;

  if (usedEndpoint.pending) return <Spinner />;
  if (usedEndpoint.failed) return <>failed</>;
  if (usedEndpoint.succeeded)
    return (
      <>
        <HStack justify="space-between">
          <Heading>Survey Templates</Heading>
          <Button as={Link} to="/survey-template">
            Create
          </Button>
        </HStack>
        <VStack align="stretch">
          {templates?.map((x) => (
            <Link to={`/survey-template/${x.id}`}>
              <Flex>{x.name}</Flex>
            </Link>
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
      method: 'GET',
    },
    enableRequest: true,
  });
  const templates = usedEndpoint.data;

  if (usedEndpoint.pending) return <Spinner />;
  if (usedEndpoint.failed) return <>failed</>;
  if (usedEndpoint.succeeded)
    return (
      <>
        <VStack align="stretch" py={6}>
          {templates?.map((x) => (
            <Link to={`/survey/${x.id}`}>
              <Flex>{x.survey_template.name}</Flex>
            </Link>
          ))}
          {!templates?.length && <Text textAlign="center">All survey filled</Text>}
        </VStack>
      </>
    );

  return null;
}

export default function SurveyList({}: Props): ReactElement {
  useLayoutConfig({title: 'Surveys', bg: 'plain'});
  const {user} = useAuthBackend();

  return (
    <VStack align="stretch">
      {user?.userType === 'DOCTOR' && <SurveyTemplates />}
      {user?.userType === 'PATIENT' && <UnconfirmedSurveys />}
    </VStack>
  );
}
