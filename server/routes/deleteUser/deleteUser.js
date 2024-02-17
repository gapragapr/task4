import express from 'express'
import User from '../../models/User.js'

const router = express.Router()

router.delete('/deleteUser', async (req, res) => {
    try {
        const users = req.body.users;

        if (!users || !Array.isArray(users) || users.length === 0) {
            return res.status(400).json({ message: 'Invalid or empty user list in request body' });
        }

        const promises = users.map(async (user) => {
            const data = await User.deleteOne({ _id: user._id });
            if (data.deletedCount === 0) {
                throw new Error('User not found');
            }
        });

        await Promise.all(promises);

        return res.status(200).json({ message: 'Users deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;