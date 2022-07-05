import { User } from "../../entities/User";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";

interface ICreateUserDTO{
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepositories){}
  async execute({name, email}: ICreateUserDTO){
    let user = new User();
    user = Object.assign({
      ...user,name, email
    });
    await this.usersRepository.create(user);
  }
}

export { CreateUserUseCase}
