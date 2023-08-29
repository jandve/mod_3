import {dbConnection} from "../../index.js";

class UserModel {
	async getUsers() {
		const getAllUsersSql = 'select * from users';
		const { rows } = await dbConnection.query(getAllUsersSql);
		return rows;
	}
}

class UserController {
	constructor(UserModel) {
		this.model = UserModel;
	}

	async getUsers(req, res) {
		const users = await this.model.getUsers()
		res.send(users)
	}
}

const model = new UserModel();
export const UsersController = new UserController(model);
