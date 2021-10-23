import {ReactElement} from 'react';
import {SurveyQuestion} from '../../model/SurveyTemplate';
import QuestionRating from './QuestionRating';
import QuestionYesNo from './QuestionYesNo';

interface Props {
  question: SurveyQuestion;
  onChange?: (value: number) => void;
  number: number;
}

export default function QuestionRouter({question, number, onChange}: Props): ReactElement {
  console.log(question);
  if (question.__component == 'survey.rating-question')
    return <QuestionRating question={question} onChange={onChange} number={number} />;
  if (question.__component == 'survey.yes-no-question')
    return <QuestionYesNo question={question} onChange={onChange} number={number} />;
}
