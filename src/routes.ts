import { Router } from "express";
import { TaskController } from "./controllers/TaskController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const taskController = new TaskController();

router.post('/users', userController.create);

router.post('/tasks', taskController.create);
router.get('/tasks', taskController.show);
router.delete('/tasks', taskController.delete);

export { router };