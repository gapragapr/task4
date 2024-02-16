import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'

import loginRouter from './routes/login/login.js'
import registerRouter from './routes/register/register.js'
import deleteRouter from './routes/deleteUser/deleteUser.js'
import blockRouter from './routes/blockUser/blockUser.js'
import getUsersRouter from './routes/getUsers/getUsers.js'
import unblockRoute from './routes/unblockUser/unblockUser.js'
import testRouter from './routes/test/test.js'

import checkUser from './middleware/checkUser.js'
import noCorse from './middleware/noCorse.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const server = express()

server.use(cors())
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Db connected'))
    .catch(() => console.log('Connection to db is failed'))

server.use(noCorse)

server.use(registerRouter)
server.use(testRouter)
server.use(loginRouter)

server.use(checkUser)
server.use(getUsersRouter)
server.use(deleteRouter)
server.use(blockRouter)
server.use(unblockRoute)

server.listen(PORT, () => {
    console.log(`server startes at ${PORT} port`)
})