import { User } from "entities/User";

interface IUsersRepositories {
  create(user: User): Promise<void>
}

export {IUsersRepositories}
