import express from 'express'
import User from '../../models/User.js'

const router = express.Router()

router.post('/getUsers', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({users: users})
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
})

export default router