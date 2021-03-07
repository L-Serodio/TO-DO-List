import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe("Tasks", () => {
    beforeAll(async () => {
        const connection =  await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able to create a new task", async () => {
        const user = await request(app).post('/users').send({
            name: "User Example",
            email: "user@example.com"
        });
        
        const { id } = user.body;

        const response = await request(app).post("/tasks").send({
            title: "Title Example",
            description: "Description example",
            user_id: id,
            isDone: false
        });

        expect(response.status).toBe(201);
    });

    it("Should be able to show a user's tasks", async () => {
        const user = await request(app).post('/users').send({
            name: "User Example1",
            email: "user1@example.com"
        });
        
        const { id } = user.body;

        await request(app).post("/tasks").send({
            title: "Title Example1",
            description: "Description example1",
            user_id: id,
            isDone: false
        });

        await request(app).post("/tasks").send({
            title: "Title Example2",
            description: "Description example2",
            user_id: id,
            isDone: false
        });

        const response = await  request(app).get('/tasks').send({
            user_id: id
        });
        
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    });

    it("Should be able to delete a user's task", async () => {
        const user = await request(app).post('/users').send({
            name: "User ExampleL",
            email: "userL@example.com"
        });
        
        const { id } = user.body;

        const task = await request(app).post("/tasks").send({
            title: "Title ExampleL",
            description: "Description exampleL",
            user_id: id,
            isDone: false
        });

        const task1 = task.body;

        const response = await request(app).delete("/tasks").send({
            id: task1.id
        });
        
        expect(response.status).toBe(200);
    });

});  