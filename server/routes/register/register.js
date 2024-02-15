import express from "express"
import mongoose from "mongoose"
import User from "../../models/User.js"

import * as dotenv from 'dotenv'
dotenv.config()

import getCurrentDate from "../../functions/getCurrentDate.js"
import validateEmail from "../../functions/validateEmail.js"

const router = express.Router()

router.post('/register', async (req, res) => {
    try {

        if (!validateEmail(req.body.email) || req.body.password === '') {
            return res.status(401).json({message: 'Check the correctness of the entered data'})
        }

        if (await User.findOne({email: req.body.email})) {
            return res.status(401).json({message: 'The user is already registered'})
        }

        const userData = {...req.body, status: 'active', name: req.body.email.split('@')[0], regDate: getCurrentDate(), lastDate: getCurrentDate()}
        const user = new User(userData)
        await user.save() 

        return res.status(200).json({message: 'OK', user: user})
    } catch (e) {
        return res.status(501).json({message: 'Internal Server Error'})
    }
})

export default router