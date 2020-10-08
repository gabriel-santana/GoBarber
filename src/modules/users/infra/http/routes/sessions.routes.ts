import { Router } from 'express';
import { container } from 'tsyringe';

<<<<<<< HEAD
import SessionsController from '../controllers/SessionsController';
=======
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
>>>>>>> d942840e4ddd910418a62096445224f7f61a55a4

const sessionsRouter = Router();
const sessionsController = new SessionsController();

<<<<<<< HEAD
sessionsRouter.post('/', sessionsController.create);
=======
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});
>>>>>>> d942840e4ddd910418a62096445224f7f61a55a4

export default sessionsRouter;
