import {IQuestion} from '../../../interfaces/Question';
import {QuestionState} from './types';

export function typedAction<T extends string>(type: T): {type: T};
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P,
): {type: T; payload: P};
export function typedAction(type: string, payload?: any) {
  return {type, payload};
}

export function generateMockRequest(questionsCount: number) {
  return typedAction('@mock/GENERATE_MOCK_REQUEST', {questionsCount});
}

export function generateMockSuccess(mock: IQuestion[]) {
  return typedAction('@mock/GENERATE_MOCK_SUCCESS', {mock});
}

export function generateMockFailure() {
  return typedAction('@mock/GENERATE_MOCK_FAILURE');
}

export function setAnswerForQuestion(questionId: number, answer: string) {
  return typedAction('@mock/SET_ANSWER_FOR_QUESTION', {questionId, answer});
}

export function solveQuestion(questionId: number) {
  return typedAction('@mock/SOLVE_QUESTION', {questionId});
}

export function clearMockData() {
  return typedAction('@mock/CLEAR_MOCK_DATA');
}

export function finishMock(questions: QuestionState[]) {
  return typedAction('@mock/FINISH_MOCK', {questions});
}

export type MockAction = ReturnType<
  | typeof generateMockRequest
  | typeof generateMockSuccess
  | typeof generateMockFailure
  | typeof setAnswerForQuestion
  | typeof solveQuestion
  | typeof clearMockData
  | typeof finishMock
>;

export type GenerateMockRequestActionType = ReturnType<
  typeof generateMockRequest
>;
export type GenerateMockSuccessActionType = ReturnType<
  typeof generateMockSuccess
>;
export type GenerateMockFailureActionType = ReturnType<
  typeof generateMockFailure
>;

export type SetAnswerForQuestionActionType = ReturnType<
  typeof setAnswerForQuestion
>;

export type SolveQuestionActionType = ReturnType<typeof solveQuestion>;

export type ClearMockDataActionType = ReturnType<typeof clearMockData>;

export type FinishMockActionType = ReturnType<typeof finishMock>;
