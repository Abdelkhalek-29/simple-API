import userModel from '../../../../DB/model/User.model.js'

export const getUsers = async (req, res) => {
    const users = await userModel.find({

    })
    return res.json({ message: "Done", users })
}






export const signup = async (req, res) => {
    try {
        const { userName, password, email,firstName,lastName,age,phone } = req.body;
         const user = await userModel.insertMany(req.body)

        return res.json({ message: "Done", user })
    } catch (error) {
        return res.json({ message: "Catch error", error })

    }
}





export const signin = async (req, res) => {
  const { key, password } = req.body;
  const user = await userModel.findOne({
    $or: [{
      "email": key,
      "password":password
    },
    {
      "phone": key,
      "password":password
    },
    {
      "userName": key,
      "password": password
    }
  ]
});

  if (user) {
    return res.json({ message: "Login successfuly" });
  } else {
    return res.json({ message: "Error in email or password" });
  }
};






export const updateUser = async (req,res,next) => {
    const {id} =req.params;
    const {firstName , lastName,age}=req.body;
    const user= await userModel.findOneAndUpdate({_id :id} , {firstName,lastName,age}, {new:true})
    return res.json({message:"Done",user})

} 





export const deleteUser = async (req,res,next) =>{
    const {id}=req.params;
    const user=await userModel.findOneAndDelete({_id : id})

    return res.json({message : "Done"})
}





export const searchUser = async (req, res, next) => {
    const { userName,age } = req.params;
    const user = await userModel.find({
      userName: {
        $regex: new RegExp(`^${userName}`, "i")
      },
      age: {
        $lt: age
      }
    });
  
    if (user) {
      return res.json(user);
    } else {
      return res.json({ message: "No users found" });
    }
  }

  



export const usersInfo = async(req, res, next) => {
    const user = await userModel.find().populate(
        {
            path:"postId",
            select:'title content'
        }
    )
    return res.json({message:"Done",user})
  };