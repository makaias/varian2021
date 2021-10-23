export interface SurveyQuestionBase {
  target: 'SOCIAL' | 'SLEEPING' | 'LIFE' | 'EATING' | 'PHYSICAL';
  __component: 'survey.yes-no-question' | 'survey.rating-question';
  text: string;
  id: number;
}

export interface YesNoQuestion extends SurveyQuestionBase {
  __component: 'survey.yes-no-question';
  yesValue: number;
  noValue: number;
}

interface RatingQuestionOptions {
  id: number;
  value: number;
}

export interface RatingQuestion extends SurveyQuestionBase {
  __component: 'survey.rating-question';
  minLabel: string;
  maxLabel: string;
  options: RatingQuestionOptions[];
}

export type SurveyQuestion = YesNoQuestion | RatingQuestion;

export interface SurveyTemplate {
  id: number;
  questions: SurveyQuestion[];
}
