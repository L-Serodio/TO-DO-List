# TO-DO-List
A REST API with node.js for a to-do list application

## Libraries used: 
- [Typescript](https://github.com/microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [TypeORM](https://github.com/typeorm/typeorm)
- [Jest](https://github.com/facebook/jest)
- [Supertest](https://github.com/visionmedia/supertest)

## Starting:
- To download the dependencies:
```
yarn install 
```

- To start the server on port 3333:
```
yarn dev 
```

- To run the tests:
```
yarn test 
```

## Routes: 
- *POST* -> https://localhost:3333/users  To create a user. Send:
```
{
    "name": "User Example",
    "email": "email@example.com"
}
```

- *POST* -> https://localhost:3333/tasks  To create a task. Send:
```
{
    "title": "Title example",
    "description": "Description example...",
    "user_id": ..., //Take what is generated by the user... Possibly I will change that soon
    "isDone": false
}
```

- *GET* -> https://localhost:3333/tasks  To show user tasks. Send:
```
{
    "user_id": ... //Take what is generated by the user...
}
```

- *DELETE* -> https://localhost:3333/tasks  To delete a task. Send:
```
{
    "id": ... //Take what is generated by the task...
}
```




