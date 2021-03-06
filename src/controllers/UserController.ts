import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepo = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepo.findOne({ email });

        if (userAlreadyExists) {
            return response.status(400).json({ message: "User already exists!"});
        }
        // TO-DO : Estudar typescript, express, typeORM e react(ou outro front) ... 😎👌

    }
}


export { UserController };