import produce from 'immer';
import {MockAction} from './actions';
import {MockState, QuestionState} from './types';
import {calculateScores} from '../../../utils/AuxiliarFunctions';
const initialState: MockState = {
  questions: null,
  loading: false,
  finalized: false,
  scores: 0,
};

export default function user(
  state = initialState,
  action: MockAction,
): MockState {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@mock/GENERATE_MOCK_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@mock/GENERATE_MOCK_SUCCESS': {
        let generatedMock: QuestionState[] = [];

        for (var i = 0; i < action.payload.mock.length; i++) {
          const questionAux = {
            id: i + 1,
            data: action.payload.mock[i],
            answer: '',
            solved: false,
          };
          generatedMock.push(questionAux);
        }

        draft.questions = generatedMock;
        draft.loading = false;
        break;
      }

      case '@mock/GENERATE_MOCK_FAILURE': {
        draft.questions = null;
        draft.loading = false;
        break;
      }

      case '@mock/SET_ANSWER_FOR_QUESTION': {
        console.tron.log('TESTANDO1', action.payload);

        const questionArrayAux = draft.questions.filter((item) => {
          return item.id != action.payload.questionId;
        });
        const questionAux = draft.questions.filter((item) => {
          return item.id == action.payload.questionId;
        })[0];
        questionAux.answer = action.payload.answer;

        draft.questions = [questionAux, ...questionArrayAux];

        break;
      }

      case '@mock/SOLVE_QUESTION': {
        const questionArrayAux = draft.questions.filter((item) => {
          return item.id != action.payload.questionId;
        });

        const questionAux = draft.questions.filter((item) => {
          return item.id == action.payload.questionId;
        })[0];

        questionAux.solved = true;

        draft.questions = [questionAux, ...questionArrayAux];

        break;
      }

      case '@mock/CLEAR_MOCK_DATA': {
        draft.questions = null;

        break;
      }

      case '@mock/FINISH_MOCK': {
        if (draft.questions) {
          draft.scores = calculateScores(draft.questions);
        }
        draft.finalized = true;

        console.tron.log(draft);
        break;
      }
      default:
        return state;
    }
  });
}
