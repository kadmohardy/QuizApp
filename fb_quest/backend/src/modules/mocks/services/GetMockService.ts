import { inject, injectable } from 'tsyringe';

import Question from '../../questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '../../questions/repositories/IQuestionsRepository';

@injectable()
class GetMockService {
  constructor(
    @inject('QuestionsRepository')
    private QuestionsRepository: IQuestionsRepository
  ) {}

  public async execute(questionsCount: number): Promise<Question[]> {
    const mock = this.QuestionsRepository.findRandomQuestionsByCount(
      questionsCount
    );

    return mock;
  }
}

export default GetMockService;
