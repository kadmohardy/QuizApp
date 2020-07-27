import { Request, Response } from 'express';

import { container } from 'tsyringe';
import GetQuestionsListService from '@modules/questions/services/GetQuestionsListService';

export default class QuestionsListController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { page } = request.params;

    const getQuestion = container.resolve(GetQuestionsListService);

    const question = await getQuestion.execute({ page });

    return response.json(question);
  }
}
