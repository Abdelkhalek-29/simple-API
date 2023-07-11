import mongoose from 'mongoose'

const connectDB = async () => {
    return await mongoose.connect(`mongodb://0.0.0.0:27017/week5`).then(result => {
        console.log(`DB Connected`);
        // console.log(result);
    }).catch(err => {
        console.log(`Fail to connectDB  ....... ${err}`);
    })
}
export  default connectDB
