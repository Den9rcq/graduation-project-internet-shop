const express = require('express')
const Product = require('../models/Product')
const router = express.Router({ mergeParams: true })

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
    .post(async (req, res) => {
        try {
            const newProduct = await Product.create({ ...req.body })
            res.status(201).send(newProduct)
        } catch (e) {
            res.status(500).json({
                message: `На сервере произошла ошибка ${e}`
            })
        }
    })

router.get('/:productId', async (req, res) => {
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

module.exports = router