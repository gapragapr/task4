import express from 'express'
import User from '../../models/User.js';

import getCurrentDate from '../../functions/getCurrentDate.js';


const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const data = await User.findOne({email: req.body.email});
        if (!data) {
            return res.status(404).json({message: 'User is not found'});
        } 
        if (data.password !== req.body.password) {
            return res.status(401).json({message: 'Check the correctness of the entered data'});
        }
        if (data.status === 'blocked') {
            return res.status(403).json({message: 'User is blocked'});
        }
        
        await User.updateOne({ email: req.body.email }, { $set: { lastDate: getCurrentDate()}});
        
        res.status(200).json({message: 'OK', user: data});
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
});

export default router;