import { Router } from 'express';
import { usersController } from '../controllers';

const userRouter = Router();

userRouter.get('/', usersController.getAllUsers());
userRouter.get('/:id', usersController.getUser());
userRouter.post('/', usersController.addUser());
userRouter.post('/sign-in', usersController.signInUser());
userRouter.put('/:id', usersController.updateUser());
userRouter.delete('/:id', usersController.deleteUser());

export default userRouter;
