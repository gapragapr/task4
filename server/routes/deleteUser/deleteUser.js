import express from 'express'
import User from '../../models/User.js'

const router = express.Router()

router.delete('/deleteUser', (req, res) => {
    try {
        req.body.users.forEach(async (item) => {
            const data = await User.deleteOne({ _id: item._id})

            if (data.deletedCount === 0) {
                return res.status(404).json({message: 'User is not found'});
            }
        })
        
        return res.status(200).json({message: 'User deleted successfully'})
    } catch (e) {
        res.status(500).json({message: 'Internal Server Error'})
    }
})

export default router