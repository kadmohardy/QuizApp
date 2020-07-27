import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/schemas/Question';
import IQuestionsRepository from '../repositories/IQuestionsRepository';

interface IRequest {
  enunciado: string;
  alternativas: [
    {
      letra: string;
      correta: boolean;
      texto: string;
    }
  ];
  disponivel: boolean;
}

@injectable()
class UpdateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private QuestionsRepository: IQuestionsRepository
  ) {}

  public async execute(
    id: string,
    { enunciado, alternativas, disponivel }: IRequest
  ): Promise<Question> {
    const question = this.QuestionsRepository.update(id, {
      enunciado,
      alternativas,
      disponivel,
    });

    return question;
  }
}

export default UpdateQuestionService;
