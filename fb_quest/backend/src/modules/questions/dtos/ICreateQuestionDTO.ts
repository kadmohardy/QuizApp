import IQuestionOptionDTO from './IQuestionOptionDTO';

export default interface ICreateQuestionDTO {
  materia: string;
  vestibular: string;
  resolucao: string;
  enunciado: string;
  numeroQuestao: number;
  ano: number;
  alternativas: IQuestionOptionDTO[];
  disponivel: boolean;
}
