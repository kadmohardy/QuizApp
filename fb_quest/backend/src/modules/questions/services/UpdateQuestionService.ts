import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/schemas/Question';
import IQuestionsRepository from '../repositories/IQuestionsRepository';

interface IRequest {
  enunciado: string;
  resolucao: string;
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
    { enunciado, resolucao, disponivel }: IRequest
  ): Promise<Question | undefined> {
    const question = this.QuestionsRepository.update(id, {
      enunciado,
      resolucao,
      disponivel,
    });

    return question;
  }
}

export default UpdateQuestionService;
