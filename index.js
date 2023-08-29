import {UsersController} from "./routes/users/index.js";
import express from "express";
import pg from 'pg';
const { Pool } = pg;

const app = express();
const port = 3000;

export const dbConnection = new Pool({
	user: 'jan',
	password: 'password',
	host: 'localhost',
	database: 'mod_3',
	port: '5466',
})

app.use(express.json());

app.get('/usuarios', UsersController.getUsers.bind(UsersController));

app.listen(port, () => {
	console.log(`The app is running =) ${port}`)
});
