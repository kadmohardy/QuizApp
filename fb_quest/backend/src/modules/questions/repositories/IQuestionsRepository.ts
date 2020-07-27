import Question from '../infra/typeorm/schemas/Question';
import ICreateQuestionDTO from '../dtos/ICreateQuestionDTO';
import IUpdateQuestionDTO from '../dtos/IUpdateQuestionDTO';

export default interface IQuestionsRepository {
  findList(page: number): Promise<Question[]>;
  findById(id: string): Promise<Question | undefined>;
  findByCode(code: string): Promise<Question | undefined>;
  create(data: ICreateQuestionDTO): Promise<Question>;
  update(id: string, data: IUpdateQuestionDTO): Promise<Question | undefined>;
  save(data: Question): Promise<Question>;
  findRandomQuestionsByCount(questionsCount: number): Promise<Question[]>;
}
