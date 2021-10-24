import {Button} from '@chakra-ui/button';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Box, Container, Text, VStack} from '@chakra-ui/layout';
import {CloseButton, HStack, Table, Tbody, Td, Tr, useToast} from '@chakra-ui/react';
import {FieldArray, Form, Formik} from 'formik';
import React, {FC, ReactElement, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {useLayoutConfig} from '../app/layout';
import FailureParagraph from '../components/FailureParagraph';
import FormikInput from '../components/formik/FormikInput';
import FormikSelect from '../components/formik/FormikSelect';
import AllUserQueryingUserSelector from '../components/selector/AllUserQueryingUserSelector';
import Spinner from '../components/Spinner';
import UniformGrid from '../components/UniformGrid';
import {User} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
import {SurveyQuestion, SurveyTemplate} from '../model/SurveyTemplate';
import callJsonEndpoint from '../util/api/callJsonEndpoint';

interface Props {}

export default function EditSurveyTemplate({}: Props): ReactElement {
  useLayoutConfig({title: 'Create Survey Template', bg: 'plain'});

  const {id} = useParams<{id}>();

  const history = useHistory();
  const toast = useToast();

  const usedEndpoint = useEndpoint<SurveyTemplate>({
    conf: {
      url: '/survey-template/' + id,
      method: 'GET',
    },
    enableRequest: id != null,
  });

  if (usedEndpoint.pending) <Spinner />;

  if (id && !usedEndpoint.succeeded) return null;

  return (
    <>
      <Formik
        initialValues={id ? usedEndpoint?.data : {id: null}}
        enableReinitialize
        onSubmit={async (v) => {
          try {
            const e = await callJsonEndpoint<SurveyTemplate>({
              conf: {
                url: v.id ? `/survey-template/${v.id}` : '/doctors/create-survey-template',
                method: v.id ? 'PUT' : 'POST',
                data: v,
              },
            });
            toast({
              title: 'Template saved',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
            history.push('/survey-template/' + e.data.id);
          } catch (err) {
            toast({
              title: 'Error',
              description: err.message,
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          }
        }}
      >
        <VStack p={4} spacing={4} as={Form} align="stretch">
          <Link to="/surveys">
            <Button variant="link"> Back</Button>
          </Link>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <FormikInput name="name" required />
          </FormControl>
          <FieldArray name="questions">
            {({form, push, remove}) => (
              <>
                <HStack justify="flex-start">
                  <Text>Questions</Text>
                  <Button
                    onClick={() =>
                      push({
                        __component: 'survey.rating-question',
                        minLabel: '',
                        maxLabel: '',
                        options: [],
                        target: 'SOCIAL',
                      })
                    }
                  >
                    Add Rating
                  </Button>
                  <Button
                    onClick={() =>
                      push({
                        __component: 'survey.yes-no-question',
                        yesValue: 1,
                        noValue: 0,
                        target: 'SOCIAL',
                      })
                    }
                  >
                    Add Yes No
                  </Button>
                </HStack>
                <VStack align="stretch">
                  {form.values?.questions?.map((question, index) => (
                    <QuestionEditor remove={() => remove(index)} question={question} index={index} />
                  ))}
                </VStack>
              </>
            )}
          </FieldArray>
          <Button type="submit">Save</Button>
        </VStack>
      </Formik>
      {id && <UserCronEditor id={id} />}
    </>
  );
}

interface QuestionEditorProps {
  question: SurveyQuestion;
  index: number;
  remove: () => void;
}

function QuestionEditor({question, index, remove}: QuestionEditorProps) {
  return (
    <VStack position="relative" align="stretch" border="1px solid" borderColor="grac.200" borderRadius={6} p={3}>
      <CloseButton position="absolute" top="0" right="0" onClick={remove} />
      {question.__component === 'survey.yes-no-question' && (
        <>
          <Text fontSize="2xl">Yes No</Text>
          <FormControl>
            <FormLabel>Question</FormLabel>
            <FormikInput name={`questions[${index}].text`} />
          </FormControl>
          <FormControl>
            <FormLabel>Question type</FormLabel>
            <FormikSelect name={`questions[${index}].target`}>
              <option value="SOCIAL">Social</option>
              <option value="SLEEPING">Sleeping</option>
              <option value="LIFE">Life</option>
              <option value="EATING">Eating</option>
              <option value="PHYSICAL">Physical</option>
            </FormikSelect>
          </FormControl>
          <UniformGrid columns={[1, 2, 2]} gap={4}>
            <FormControl>
              <FormLabel>No Value</FormLabel>
              <FormikInput type="number" name={`questions[${index}].noValue`} />
            </FormControl>
            <FormControl>
              <FormLabel>Yes Value</FormLabel>
              <FormikInput required type="number" name={`questions[${index}].yesValue`} />
            </FormControl>
          </UniformGrid>
        </>
      )}
      {question.__component === 'survey.rating-question' && (
        <>
          <Text fontSize="2xl">Rating</Text>
          <FormControl>
            <FormLabel>Question</FormLabel>
            <FormikInput required name={`questions[${index}].text`} />
          </FormControl>
          <FormControl>
            <FormLabel>Question type</FormLabel>
            <FormikSelect name={`questions[${index}].target`}>
              <option value="SOCIAL">Social</option>
              <option value="SLEEPING">Sleeping</option>
              <option value="LIFE">Life</option>
              <option value="EATING">Eating</option>
              <option value="PHYSICAL">Physical</option>
            </FormikSelect>
          </FormControl>
          <UniformGrid columns={[1, 2, 2]} gap={4}>
            <FormControl>
              <FormLabel>Left Label</FormLabel>
              <FormikInput required name={`questions[${index}].minLabel`} />
            </FormControl>
            <FormControl>
              <FormLabel>Right Label</FormLabel>
              <FormikInput required name={`questions[${index}].maxLabel`} />
            </FormControl>
          </UniformGrid>
          <Text>Option values</Text>
          <HStack wrap="wrap">
            <FieldArray name={`questions[${index}].options`}>
              {({push, remove}) => (
                <>
                  {question.options?.map((o, i) => (
                    <FormikInput required type="number" width="5rem" name={`questions[${index}].options[${i}].value`} />
                  ))}
                  <Button onClick={() => remove(question.options.length - 1)}>-</Button>
                  <Button onClick={() => push({value: 0})}>+</Button>
                </>
              )}
            </FieldArray>
          </HStack>
        </>
      )}
    </VStack>
  );
}

interface Props {
  id: number;
}

const UserCronEditor: FC<Props> = ({id}: Props) => {
  useLayoutConfig({title: 'Edit article', bg: 'plain'});
  const [selectedUserIdToAdviseFor, setSelectedUserIdToAdviseFor] = useState(null);
  const toast = useToast();

  const usedAdvisedUsers = useEndpoint<User[]>({
    conf: {
      url: '/survey-template/cron-targets/' + id,
      method: 'GET',
    },
    enableRequest: true,
  });

  function doAdvise() {
    callJsonEndpoint({
      conf: {
        url: `/survey-template/insert-cron-user/${id}`,
        method: 'post',
        data: {userId: selectedUserIdToAdviseFor},
      },
    })
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch((err) => {
        alert('Error while advising article :/');
      });
  }

  function sendSurvey() {
    callJsonEndpoint({
      conf: {
        url: `/doctors/send-survey/${id}`,
        method: 'post',
        data: {userId: selectedUserIdToAdviseFor},
      },
    })
      .then(() => {
        toast({
          title: 'Survay sent',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        alert('Error while advising article :/');
      });
  }

  function doUnadvise(userId: number) {
    callJsonEndpoint({
      conf: {
        url: '/survey-template/remove-cron-user/' + id,
        method: 'post',
        data: {userId: userId},
      },
    })
      .then(() => {
        usedAdvisedUsers.reloadEndpoint();
      })
      .catch((err) => {
        alert('Error while unadvising article :/');
      });
  }

  return (
    <>
      <Container pt={8} maxWidth="container.xl">
        <Text fontSize="xl" align="center">
          Users this survey is auto assigned
        </Text>

        {usedAdvisedUsers.pending && <Spinner />}
        {usedAdvisedUsers.failed && <FailureParagraph onRetry={usedAdvisedUsers.reloadEndpoint} />}
        {usedAdvisedUsers.succeeded && (
          <>
            <Table variant="simple">
              <Tbody>
                {usedAdvisedUsers.data.map((patient) => (
                  <Tr key={patient.id} borderTop="1px" borderColor="primary.500">
                    <Td>{patient.firstname + ' ' + patient.surename}</Td>
                    <Td>
                      <Button colorScheme="primary" onClick={() => doUnadvise(patient.id)}>
                        Remove from cron
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <HStack justify="center">
              <Box maxWidth="100%" width="25rem">
                <AllUserQueryingUserSelector
                  userId={selectedUserIdToAdviseFor}
                  setUserId={setSelectedUserIdToAdviseFor}
                />
              </Box>
              <Button colorScheme="primary" onClick={() => doAdvise()}>
                Add to cron
              </Button>
              <Button colorScheme="primary" onClick={() => sendSurvey()}>
                Send survey
              </Button>
            </HStack>
          </>
        )}
      </Container>
      <br />
    </>
  );
};
