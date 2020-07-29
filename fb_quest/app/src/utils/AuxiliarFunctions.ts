import {QuestionState} from 'src/store/modules/mock/types';

export function getFirstName(name: string) {
  const names = name.split(' ');
  return names[0];
}

export function calculateScores(questions: QuestionState[]) {
  let scores = 0;

  questions.map((question) => {
    const optionsAux = question.data.alternativas;

    if (optionsAux) {
      const correctOption = optionsAux.filter((option) => {
        return option.correta == true;
      })[0];

      if (question.answer == correctOption.letra) {
        scores++;
      }
    }
  });
  return (scores / questions.length) * 100;
}
