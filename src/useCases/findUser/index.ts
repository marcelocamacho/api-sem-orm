import { UsersPostgresRepositories } from "../../repositories/implementations/UsersPostgresRepositories";
import { FindUserByIdController } from "./findUserByIdController";
import { FindUserByIdUseCase } from "./findUserByIdUseCase";


const usersRepository =  new UsersPostgresRepositories();
const findUserByIdUseCase= new FindUserByIdUseCase(usersRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export {findUserByIdController}
