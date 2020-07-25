import { getMongoRepository, MongoRepository } from 'typeorm';

import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';
import ICreateQuestionDTO from '@modules/questions/dtos/ICreateQuestionDTO';
import Question from '../schemas/Question';

class QuestionsRepository implements IQuestionsRepository {
  private ormRepository: MongoRepository<Question>;

  constructor() {
    this.ormRepository = getMongoRepository(Question, 'mongo');
  }

  public async findById(id: string): Promise<Question[] | undefined> {
    const findQuestion = await this.ormRepository.findOne(id);

    return findQuestion;
  }

  public async findByCode(code: string): Promise<Question | undefined> {
    const findQuestion = await this.ormRepository.findOne({
      where: { code },
    });
    return findQuestion;
  }

  public async create(questionData: ICreateQuestionDTO): Promise<Question> {
    const question = this.ormRepository.create(questionData);

    await this.ormRepository.save(question);

    return question;
  }

  public async save(question: Question): Promise<Question> {
    return this.ormRepository.save(question);
  }

  public async findRandomQuestionsByCount(
    questionsCount: number
  ): Promise<Question[]> {
    const countQuestionsInDB = await this.ormRepository.count();

    const offset = Math.floor(
      Math.random() * (countQuestionsInDB - questionsCount)
    );

    const findQuestions = await this.ormRepository.find({
      skip: offset,
      take: questionsCount,
    });
    return findQuestions;
  }
}

export default QuestionsRepository;
