import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { findUserByIdController } from "./useCases/findUser";


const router = Router();
router.post('/users',(request,response)=>{
  return createUserController.handle(request,response)
});
router.get("/users/:id",(request,response)=>{
  return findUserByIdController.handle(request,response)
})
export {router}
