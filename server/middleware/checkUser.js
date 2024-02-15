import mongoose from "mongoose"
import User from "../models/User.js"

const checkUser = async (req, res, next) => {
    try {
        const data = await User.findOne({email: req.body.email});

        if (!data || data.status === 'blocked') {
            return res.status(403).json({message: 'access denied'})
        }

        next()
    } catch (error) {
        return res.status(501).json({message: 'Internal server error'})
    }
}

export default checkUser