import mongoose from "mongoose"

const Schema = mongoose.Schema

const userScheme = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    regDate: String,
    lastDate: String,
    status: String,
    password: String
})

const User = mongoose.model("User", userScheme)

export default User