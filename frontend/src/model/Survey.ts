import {SurveyTemplate} from './SurveyTemplate';

export interface Survey {
  id: number;
  survey_template: SurveyTemplate;
  complete: boolean;
}
