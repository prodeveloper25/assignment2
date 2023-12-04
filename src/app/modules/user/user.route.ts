import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

router.get('/:userId', UserControllers.getSingleUser);

router.get('/', UserControllers.getAllUsers);

export const UserRoutes = router;
