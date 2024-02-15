import express from 'express'
import User from '../../models/User.js'

const router = express.Router()

router.post('/unblockUser', (req, res) => {
    try {
        req.body.users.forEach(async (item) => {
            await User.updateOne({_id: item._id}, {$set: { status: 'active' }})

            return res.status(200).json({message: 'The user is active'})
        })
    } catch (e) {
        return res.status(501).json({message: 'Internal Server Error'})
    }


})

export default router