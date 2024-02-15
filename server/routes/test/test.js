import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    return res.status(200)
})

export default router