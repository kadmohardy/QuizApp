import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/schemas/Question';
import IQuestionsRepository from '../repositories/IQuestionsRepository';

interface IRequest {
  id: string;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private QuestionsRepository: IQuestionsRepository
  ) {}

  public async execute({ id }: IRequest): Promise<Question | undefined> {
    const question = this.QuestionsRepository.findById(id);

    return question;
  }
}

export default CreateQuestionService;
