import { User } from "entities/User";
import { Pool } from "pg";
import { IUsersRepositories } from "repositories/IUsersRepositories";

import {createConnection} from '../../database/connections';

class UsersPostgresRepositories implements IUsersRepositories{

  private client: Pool
  constructor(){
    createConnection().then(connection => this.client = connection)
  }

  async create({id, name, email}: User): Promise<void> {
    await this.client.query("INSERT INTO users(id, name, email) VALUES ($1,$2,$3)",[
      id, name, email
    ])
  }

}
export {UsersPostgresRepositories}
