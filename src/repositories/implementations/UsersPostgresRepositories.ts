import { Pool } from "pg";

import {createConnection} from '../../database/connections';
import { User } from "../../entities/User";
import { IUsersRepositories } from "../IUsersRepositories";

class UsersPostgresRepositories implements IUsersRepositories{

  private client: Pool
  constructor(){
    createConnection().then(connection => this.client = connection)
  }
  async findById(idUser: string): Promise<User | null> {

    const {rows} = await this.client.query("SELECT * FROM users WHERE id = $1 LIMIT 1;", [idUser]);

    if (rows.length < 1){
      return null;
    }
    const {id, name, email} = rows[0];

    const user: User = {
      id, name, email
    };

    return user;
  }

  async create({id, name, email}: User): Promise<void> {
    await this.client.query("INSERT INTO users(id, name, email) VALUES ($1,$2,$3);",[
      id, name, email
    ]);

  }

}
export { UsersPostgresRepositories }
