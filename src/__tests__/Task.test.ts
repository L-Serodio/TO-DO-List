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
        const response = await request(app).post("/tasks").send({
            
            user_id: "123456"
        });
        
        expect(response.status).toBe(201);
    });

});  