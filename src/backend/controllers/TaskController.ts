import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TasksRepository } from "../repositories/TasksRepository";
import { UsersRepository } from "../repositories/UsersRepository";

//estudar e modificar a questao das rotas

class TaskController {
    async create(request: Request, response: Response) {
        const { title, description, user_id, isDone } = request.body;

        const tasksRepo = getCustomRepository(TasksRepository);

        const task = tasksRepo.create({ title, description, user_id, isDone });

        await tasksRepo.save(task);

        return response.status(201).json(task);
    }
    
    async show(request: Request, response: Response) {
        const { user_id } = request.body;

        const tasksRepo = getCustomRepository(TasksRepository);
        const usersRepo = getCustomRepository(UsersRepository);

        const user = await usersRepo.findOne({ id: user_id });
        
        const tasks = await tasksRepo.find({ user_id: user.id });

        return response.json(tasks);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;

        const tasksRepo = getCustomRepository(TasksRepository);

        await tasksRepo.delete({ id });

        return response.json({ message: "Task successfully deleted!"});
    }
}


export { TaskController };