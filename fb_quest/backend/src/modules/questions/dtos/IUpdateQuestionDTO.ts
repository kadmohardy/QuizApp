import IQuestionOptionDTO from './IQuestionOptionDTO';

export default interface IUpdateQuestionDTO {
  enunciado: string;
  alternativas: IQuestionOptionDTO[];
  disponivel: boolean;
}
