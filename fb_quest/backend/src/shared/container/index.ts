import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';
import QuestionsRepository from '@modules/questions/infra/typeorm/repositories/QuestionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository
);
