import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import MocksController from '../controllers/MocksController';

const mocksRouter = Router();
const mocksController = new MocksController();

mocksRouter.get('/:count', mocksController.show);

export default mocksRouter;
