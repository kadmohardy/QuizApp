export interface IQuestionOption {
  letra: string;
  correta: boolean;
  texto: string;
}

export interface IQuestion {
  materia: string;
  vestibular: string;
  resolucao: string;
  enunciado: string;
  numeroQuestao: number;
  ano: number;
  alternativas: IQuestionOption[];
  disponivel: boolean;
}
