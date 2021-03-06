import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepo = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepo.findOne({ email });

        if (userAlreadyExists) {
            return response.status(400).json({ error: "User already exists!"});
        }

        const user = usersRepo.create({ name, email });

        await usersRepo.save(user);

        return response.status(201).json(user);
    }
}


export { UserController };