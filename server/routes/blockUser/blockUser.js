import express from 'express'
import User from '../../models/User.js'

const router = express.Router()

router.post('/blockUser', (req, res) => {
    try {
        req.body.users.forEach(async (item) => {
            await User.updateOne({_id: item._id}, {$set: { status: 'blocked' }})

            return res.status(200).json({message: 'The user is blocked'})
        })
    } catch (e) {
        return res.status(501).json({message: 'Internal Server Error'})
    }


})

export default router