import IQuestionOptionDTO from './IQuestionOptionDTO';

export default interface IUpdateQuestionDTO {
  enunciado: string;
  resolucao: string;
  disponivel: boolean;
}
