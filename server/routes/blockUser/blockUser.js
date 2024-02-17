import express from 'express';
import User from '../../models/User.js';

const router = express.Router();

router.post('/blockUser', async (req, res) => {
    try {
        const users = req.body.users;

        if (!Array.isArray(users) || users.length === 0) {
            return res.status(400).json({ message: 'Invalid or empty user list in request body' });
        }

        for (const user of users) {
            await User.updateOne({ _id: user._id }, { $set: { status: 'blocked' } });
        }

        return res.status(200).json({ message: 'Users are blocked' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
