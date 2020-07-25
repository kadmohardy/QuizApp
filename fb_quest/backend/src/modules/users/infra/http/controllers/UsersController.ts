import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, birthdate, gender, email, password, provider } = request.body;

    const createUser = container.resolve(CreateUserService);

    console.log('TESTANDO CRIACAO DE USER');
    const user = await createUser.execute({
      name,
      birthdate,
      gender,
      email,
      password,
      provider,
    });

    return response.json(user);
  }
}
