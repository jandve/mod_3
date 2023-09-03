import { UsersController } from './routes/users/index.js';
import express from 'express';
import { dbConnection } from './dbConnection.js';

const app = express();
const port = 3000;

export const dbClient = dbConnection;

app.use(express.json());

app.get('/users/age-avg', UsersController.getAvgAge.bind(UsersController));
app.get('/users', UsersController.getUsers.bind(UsersController));
app.post('/users', UsersController.createUser.bind(UsersController));
app.get('/users/:id', UsersController.getUser.bind(UsersController));
app.put('/users/:id', UsersController.editUser.bind(UsersController));
app.delete('/users/:id', UsersController.deleteUser.bind(UsersController));
app.get('/status', UsersController.getServerState.bind(UsersController));

app.listen(port, () => {
  console.log(`The app is running =) ${port}`);
});
