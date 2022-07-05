import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./findUserByIdUseCase";

class FindUserByIdController {

  constructor(private findUserByIdUseCase: FindUserByIdUseCase){}

  async handle(request:Request, response:Response){
    const {id} = request.params;

    const user = await this.findUserByIdUseCase.execute(id);

    return response.json(user);

  }
}
export {FindUserByIdController}
