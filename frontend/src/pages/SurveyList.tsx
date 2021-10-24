import {Button} from '@chakra-ui/button';
import {Flex, Heading, HStack, VStack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner';
import {useAuthBackend} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
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

export default function SurveyList({}: Props): ReactElement {
  const {user} = useAuthBackend();

  return <VStack align="stretch">{user?.userType === 'DOCTOR' && <SurveyTemplates />}</VStack>;
}
