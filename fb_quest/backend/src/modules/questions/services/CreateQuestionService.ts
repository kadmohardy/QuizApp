import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/entities/Question';
import IQuestionsRepository from '../repositories/IQuestionsRepository';

interface IRequest {
  description: string;
  code: string;
  provider_id: string;
  validate_date: Date;
  value_percent: number;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private QuestionsRepository: IQuestionsRepository
  ) {}

  public async execute({
    description,
    code,
    provider_id,
    validate_date,
    value_percent,
  }: IRequest): Promise<Question> {
    const question = this.QuestionsRepository.create({
      description,
      code,
      provider_id,
      validate_date,
      value_percent,
    });

    return question;
  }
}

export default CreateQuestionService;
