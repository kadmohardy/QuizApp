import { Request, Response } from 'express';

import { container } from 'tsyringe';
import GetMockService from '@modules/questions/services/GetMockService';

export default class MocksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    } = request.body;

    const createQuestion = container.resolve(CreateQuestionService);

    const question = await createQuestion.execute({
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    });

    return response.json(question);
  }
}
