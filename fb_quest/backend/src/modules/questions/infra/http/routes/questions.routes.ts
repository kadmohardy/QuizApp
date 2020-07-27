import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import QuestionsController from '../controllers/QuestionsController';
import QuestionsListController from '../controllers/QuestionsListController';

const questionsRouter = Router();
const questionsController = new QuestionsController();
const questionsListController = new QuestionsListController();

questionsRouter.patch('/:id', questionsController.update);
questionsRouter.get('/:id', questionsController.show);
questionsRouter.get('/list/:page', questionsListController.show);
export default questionsRouter;
