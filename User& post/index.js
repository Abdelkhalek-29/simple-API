import bootstrap from './src/index.router.js'
import express  from 'express'
const app = express()
const port = 5000


bootstrap(app , express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))