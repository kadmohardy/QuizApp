import ICreateQuestionOptionDTO from './ICreateQuestionOptionDTO';

export default interface ICreateQuestionDTO {
  materia: string;
  vestibular: string;
  resolucao: string;
  enunciado: string;
  numeroQuestao: number;
  ano: number;
  alternativas: [ICreateQuestionOptionDTO];
  disponivel: boolean;
}
