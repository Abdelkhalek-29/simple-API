import userModel from "../../../../DB/model/User.model.js";
import postModel from "../../../../DB/model/post.model.js";




export const addPost= async(req,res,next) => {
  try{  const {title , content , userId} =req.body;
    console.log(title , content , userId);

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ message: "in valid userID" });
    } else {
      const post = await postModel.create({content,title,userId});
      return res.json({ message: "Done", post });
    }}catch(error){
        return res.json({message:" Catch Error"})
    }
  };                    




  export const deletePost = async(req, res, next) => {
    const { id } = req.params;
    const { userId } = req.body;
  try{
    const user = await userModel.findOne({ userId });
    if (user) {
       const post= await postModel.deleteOne({ _id: id  });
        return res.json({ message: "Post deleted" });
      } else {
        return res.json({ message: "You are not authorized to delete this post" });
      }
  }catch(error){
    return res.json({message:"Catch Error"})
  }
  };





  export const updatePost = async(req, res, next) => {
    const { id } = req.params;
    const { userId, content, title } = req.body;
  try{
    const post = await postModel.findOne({ _id: id })
    if (post) {
      if (post.userId == userId) {
        const updatedPost = await postModel.updateOne({ _id: id }, { content, title });
        if (updatedPost) {
          return res.json({ message: "Post updated" });
        }
      } 
      else {
        return res.json({ message: "You are not authorized to update this post" });
      }
    } 
  }catch(error){

    return res.json({ message: "Error catch" })
  }
}



export const getposts = async (req, res) => {
    const posts = await postModel.find({

    })
    return res.json({ message: "Done", posts })
}





export const postsAndUsers = async(req, res, next) => {
    const post = await postModel.find().populate(
        {
            path:"userId",
            select:'userName email'
        }
    )
    return res.json({message:"Done",post})
  };




export const getNotesSortedByDate = async(req, res, next) => {
    const post = await postModel.find().sort({ createdAt: -1 });
    if (post) {
      return res.json({ post });
    } else {
      return res.json({ message: "Notes not found" });
    }
  };