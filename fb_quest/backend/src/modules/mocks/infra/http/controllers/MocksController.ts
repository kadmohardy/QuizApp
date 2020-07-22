import { Request, Response } from 'express';

import { container } from 'tsyringe';
import GetMockService from '@modules/mocks/services/GetMockService';

export default class MocksController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { count } = request.params;

    const showMock = container.resolve(GetMockService);

    const mock = await showMock.execute(Number(count));

    return response.json(mock);
  }
}
