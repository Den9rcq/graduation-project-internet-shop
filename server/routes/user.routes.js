const express = require('express')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')

router.get('/:userId', auth, async (req, res) => {
    try {
        const { userId } = req.params
        if (userId === req.user._id) {
            const user = await User.findById(userId)
            res.send(user)
        } else {
            res.status(401).json({ message: "Unauthorized", code: 401 })
        }

    } catch (e) {
        res.status(500).json({
            message: `На сервере произошла ошибка: ${e}`
        })
    }
})

router.patch


module.exports = router