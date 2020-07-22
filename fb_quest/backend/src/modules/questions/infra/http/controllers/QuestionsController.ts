import { Request, Response } from 'express';

import { container } from 'tsyringe';
import GetQuestionService from '@modules/questions/services/GetQuestionService';

export default class QuestionsController {
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

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getQuestion = container.resolve(GetQuestionService);

    const question = await getQuestion.execute({ id });


    return response.json(question);
  }
}
