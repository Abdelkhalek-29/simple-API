import { getUsers } from "./controller/user.js";
import * as userController from "./controller/user.js";

import { Router } from "express";
const router = Router()

router.get('/user', userController.getUsers)
router.post("/signup", userController.signup)
router.post("/signin" , userController.signin)
router.put("/update/:id" ,userController.updateUser)
router.delete(":id" , userController.deleteUser)
router.get("/search", userController.searchUser)
router.get("/userinfo", userController.usersInfo);


export default router