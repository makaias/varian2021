import {Button} from '@chakra-ui/button';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Text, VStack} from '@chakra-ui/layout';
import {CloseButton, HStack, useToast} from '@chakra-ui/react';
import {FieldArray, Form, Formik} from 'formik';
import React, {ReactElement} from 'react';
import {useHistory} from 'react-router';
import {useLayoutConfig} from '../app/layout';
import FormikInput from '../components/formik/FormikInput';
import UniformGrid from '../components/UniformGrid';
import {SurveyQuestion} from '../model/SurveyTemplate';
import callJsonEndpoint from '../util/api/callJsonEndpoint';

interface Props {}

export default function CreateSurveyTemplate({}: Props): ReactElement {
  useLayoutConfig({title: 'Create Survey Template', bg: 'plain'});
  const history = useHistory();
  const toast = useToast();

  return (
    <Formik
      initialValues={{}}
      onSubmit={async (v) => {
        try {
          await callJsonEndpoint({
            conf: {
              url: '/doctors/create-survey-template',
              method: 'POST',
              data: v,
            },
          });
          toast({
            title: 'Template Created',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          history.push('/surveys');
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
