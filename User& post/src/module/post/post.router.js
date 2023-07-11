import * as postController from './controller/post.js'
import { Router } from "express";
const router=Router()


router.post("/add" , postController.addPost)
router.delete("/:id" , postController.deletePost)
router.put("/:id" , postController.updatePost)
router.get("/",postController.getposts)
router.get("/postsinfo",postController.postsAndUsers)
router.get("/sort",postController.getNotesSortedByDate)




export default router