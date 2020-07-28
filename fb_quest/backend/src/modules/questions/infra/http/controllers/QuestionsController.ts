import { Request, Response } from 'express';

import { container } from 'tsyringe';
import GetQuestionService from '@modules/questions/services/GetQuestionService';
import UpdateQuestionService from '@modules/questions/services/UpdateQuestionService';

export default class QuestionsController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { enunciado, resolucao, disponivel } = request.body;
    const { questionId } = request.params;

    const updateQuestion = container.resolve(UpdateQuestionService);

    const question = await updateQuestion.execute(questionId, {
      enunciado,
      resolucao,
      disponivel,
    });

    return response.json(question);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getQuestion = container.resolve(GetQuestionService);

    const question = await getQuestion.execute({ id });

    return response.json(question);
  }
}
