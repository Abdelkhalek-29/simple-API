import connectDB from '../DB/connection.js'
import userRouter from './module/user/user.router.js'
import postRouter from './module/post/post.router.js'
const bootstrap = (app, express) => {
    app.use(express.json())
    app.use("/user", userRouter)
    app.use("/Post",postRouter)
    app.use("*", (req, res, next) => {
        return res.json({ message: "In-valid Routing" })
    })

    connectDB()
}

export default bootstrap