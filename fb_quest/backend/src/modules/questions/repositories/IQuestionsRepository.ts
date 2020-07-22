import Question from '../infra/typeorm/schemas/Question';
import ICreateQuestionDTO from '../dtos/ICreateQuestionDTO';

export default interface IQuestionsRepository {
  findById(data: string): Promise<Question | undefined>;
  findByCode(data: string): Promise<Question | undefined>;
  create(data: ICreateQuestionDTO): Promise<Question>;
  save(data: Question): Promise<Question>;
  findRandomQuestionsByCount(questionsCount: number): Promise<Question[]>;
}
