import { User } from "../entities/User"

interface IUsersRepositories {
  create(user: User): Promise<void>
  findById(id: string): Promise<User | null>
}

export {IUsersRepositories}
