import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import QuestionsController from '../controllers/QuestionsController';

const questionsRouter = Router();
const questionsController = new QuestionsController();

questionsRouter.post('/', ensureAuthenticated, questionsController.create);
questionsRouter.get('/:id', questionsController.show);

export default questionsRouter;
