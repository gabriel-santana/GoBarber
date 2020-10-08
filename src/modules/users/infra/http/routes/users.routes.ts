import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { container } from 'tsyringe';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticate from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

<<<<<<< HEAD
usersRouter.post('/', usersController.create);
=======
usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = container.resolve(CreateUserService);

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});
>>>>>>> d942840e4ddd910418a62096445224f7f61a55a4

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
<<<<<<< HEAD
  userAvatarController.update,
=======
  async (request, response) => {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
>>>>>>> d942840e4ddd910418a62096445224f7f61a55a4
);

export default usersRouter;
