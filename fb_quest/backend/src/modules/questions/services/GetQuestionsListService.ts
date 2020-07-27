import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/schemas/Question';
import IQuestionsRepository from '../repositories/IQuestionsRepository';

interface IRequest {
  page: string;
}

@injectable()
class GetQuestionsListService {
  constructor(
    @inject('QuestionsRepository')
    private QuestionsRepository: IQuestionsRepository
  ) {}

  public async execute({ page }: IRequest): Promise<Question | undefined> {
    const question = this.QuestionsRepository.findList(page);

    return question;
  }
}

export default GetQuestionsListService;
