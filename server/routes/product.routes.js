const express = require('express')
const Product = require('../models/Product')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth.middleware')

router
    .route('/')
    .get(async (req, res) => {
        try {
            const list = await Product.find()
            res.send(list)
        } catch (e) {
            res.status(500).json({
                message: 'На сервере произошла ошибка'
            })
        }
    })
    .post(auth, async (req, res) => {
        const { admin } = await User.findOne({ _id: req.user._id })
        if (admin) {
            try {
                const newProduct = await Product.create({ ...req.body })
                res.status(201).send(newProduct)
            } catch (e) {
                res.status(500).json({
                    message: `На сервере произошла ошибка ${e.message}`
                })
            }
        } else {
            res.status(401).json({
                message: 'У вас нет доступа'
            })
        }
    })
router
    .route('/:productId')
    .get(async (req, res) => {
        try {
            const { productId } = req.params
            if (productId) {
                const product = await Product.findById(productId)
                res.send(product)
            }
        } catch (e) {
            res.status(500).json({
                message: `На сервере произошла ошибка: ${e}`
            })
        }
    })
    .delete(auth, async (req, res) => {
        const { admin } = await User.findOne({ _id: req.user._id })
        if (admin) {
            try {
                const { productId } = req.params
                if (productId) {
                    await Product.findByIdAndDelete(productId)
                    res.send(productId)
                }

            } catch (e) {
                res.status(500).json({
                    message: `На сервере произошла ошибка: ${e}`
                })
            }
        } else {
            res.status(401).json({
                message: 'У вас нет доступа'
            })
        }

    })
    .patch(auth, async (req, res) => {
        const { admin } = await User.findOne({ _id: req.user._id })
        if (admin) {
            try {
                const { productId } = req.params
                if (productId) {
                    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true })
                    res.send(updateProduct)
                }
            } catch (e) {
                res.status(500).json({
                    message: `На сервере произошла ошибка: ${e}`
                })
            }
        } else {
            res.status(401).json({
                message: 'У вас нет доступа'
            })
        }

    })

module.exports = router