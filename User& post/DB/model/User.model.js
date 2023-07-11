import { Schema , model } from "mongoose"
import { Types } from "mongoose"

const userSchema = new Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        Number
    },
    phone:{
        type:String,
        unique:true
    },
    gender:{
        type:String,
        default:'Male',
        enum:['Male','Female']
    },
    postId:{
        type:Types.ObjectId,
        ref:'post',
        required:true
    }
    
})
const userModel=model('user',userSchema);
export default userModel