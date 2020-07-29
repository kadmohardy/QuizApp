import {IQuestion} from '../../../interfaces/Question';

export type QuestionState = {
  id: number;
  data: IQuestion;
  answer: string;
  solved: boolean;
};

export type MockState = {
  questions: QuestionState[] | null;
  loading: boolean;
  finalized: boolean;
  scores: number;
};
