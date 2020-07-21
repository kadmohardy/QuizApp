import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import MocksController from '../controllers/MocksController';

const mocksRouter = Router();
const mocksController = new MocksController();

mocksRouter.post('/', ensureAuthenticated, mocksController.create);

export default mocksRouter;
