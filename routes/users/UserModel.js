import { dbClient } from '../../index.js';

class UserModel {
  async createUser(ci, name, first_lastname, second_lastname, birth) {
    const createUserSql = `
        insert into users(ci, name, first_lastname, second_lastname, birth, enabled)
        values ('${ci}', '${name}', '${first_lastname}', '${second_lastname}', '${birth}', '${true}
                ') RETURNING *
		`;
    const { rows } = await dbClient.query(createUserSql);
    return rows;
  }

  async editUser(id, ci, name, first_lastname, second_lastname, birth) {
    const editUserSql = `
        update users
        set ci             = '${ci}',
            name           ='${name}',
            first_lastname='${first_lastname}',
            second_lastname='${second_lastname}',
            birth='${birth}'
        where id = ${id} RETURNING *
		`;
    const { rows } = await dbClient.query(editUserSql);
    return rows;
  }

  async getUsers() {
    const getAllUsersSql = `
        select *
        from users
        where enabled = ${true}
		`;
    const { rows } = await dbClient.query(getAllUsersSql);
    return rows;
  }

  async getUser(id) {
    const getUsersSql = `
        select *
        from users
        where id = ${id}
          and enabled = true
		`;
    const { rows } = await dbClient.query(getUsersSql);
    return rows;
  }

  async deleteUser(id) {
    const editUserSql = `
        update users
        set enabled = '${false}'
        where id = ${id} RETURNING *
		`;
    await dbClient.query(editUserSql);
  }

  async usersAgeAvg() {
    const avgQuery = 'select avg(extract(year from age(now(), birth))) as avg from users where enabled = true;';
    const { rows } = await dbClient.query(avgQuery);
    return rows;
  }
}

export default UserModel;
