import UserModel from './UserModel.js';

class UserController {
  constructor(UserModel) {
    this.model = UserModel;
  }

  async createUser(req, res) {
    const { ci, name, first_lastname, second_lastname, birth, age } = req.body;
    if (!ci || !name || !first_lastname || !second_lastname || !birth || !age) {
      res.status(400).send('A user required all fields, ci, name, first_lastname, second_lastname, birth, age');
    }
    //Todo validate user fields
    const userCreated = await this.model.createUser(ci, name, first_lastname, second_lastname, birth, age);
    res.status(201).send({ ...userCreated });
  }

  async editUser(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('User ID is required');
    }
    const { ci, name, first_lastname, second_lastname, birth, age } = req.body;
    if (!ci || !name || !first_lastname || !second_lastname || !birth || !age) {
      res.status(400).send('A user required all fields, ci, name, first_lastname, second_lastname, birth, age');
    }
    //Todo validate user fields
    const userEdited = await this.model.editUser(id, ci, name, first_lastname, second_lastname, birth, age);
    res.status(200).send({ ...userEdited });
  }

  async getUsers(req, res) {
    const users = await this.model.getUsers();
    res.send(users);
  }

  async getUser(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('User ID is required');
    }
    const users = await this.model.getUser(id);
    res.status(200).send(users);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('User ID is required');
    }
    await this.model.deleteUser(id);
    res.status(204).send([]);
  }

  async getAvgAge(req, res) {
    const avg = await this.model.usersAgeAvg();
    res.status(200).send({ avg });
  }

  async getServerState(req, res) {
    const status = {
      nameSystem: 'api-users',
      version: '0.0.1',
      developer: 'R. Alajandro Alcocer Vega',
      email: 'alejandro.av84@gmail.com',
    };
    res.status(200).send(status);
  }
}

const model = new UserModel();
export const UsersController = new UserController(model);
