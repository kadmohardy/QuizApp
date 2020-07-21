import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
  findById(data: string): Promise<User | undefined>;
  findByEmail(data: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(data: User): Promise<User>;
}
