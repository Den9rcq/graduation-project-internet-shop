const express = require('express')
const { Types } = require('mongoose')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth.middleware')
const Cart = require('../models/Cart')

router.get('/', auth, async (req, res) => {
    try {
        const { _id } = req.user
        const userId = new Types.ObjectId(_id);

        if (userId) {
            const cart = await Cart.findOne({ userId })
            res.send(cart)
        }
    } catch (e) {
        res.status(500).json({
            message: `На сервере произошла ошибка: ${e}`
        })
    }
})

router.post('/', auth, async (req, res) => {
    const { _id } = req.user
    const userId = new Types.ObjectId(_id);
    if (userId) {
        const cart = await Cart.findOne({ userId })
        const findedCart = cart?.order.find(product => product.productId.toHexString() === req.body.id)

        if (findedCart?.count === req.body.count) {
            return res.status(400).json({ error: { message: 'Count eq', code: 400 } })
        }

        if (findedCart) {
            const updateCart = await Cart.updateOne({
                userId: userId,
                order: {
                    $elemMatch: {
                        productId: new Types.ObjectId(req.body.id)
                    }
                },
            }, { 'order.$.count': req.body.count, 'order.$.sumProduct': req.body.sumProduct }, { new: true })
            if (updateCart.acknowledged) {
                const cart = await Cart.findOne({ userId })
                res.send(cart)
            }
        } else {
            const updateCart = await Cart.findOneAndUpdate({ userId }, {
                $push: {
                    order: {
                        count: req.body.count,
                        productId: new Types.ObjectId(req.body.id),
                        sumProduct: req.body.sumProduct
                    }
                }
            }, { new: true })
            res.send(updateCart)
        }
    }
})

router.delete('/:productId', auth, async (req, res) => {
    const { productId } = req.params
    const { _id } = req.user
    const userId = new Types.ObjectId(_id);

    if (userId) {
        const cart = await Cart.findOne({ userId })
        const findedCart = cart?.order.find(product => product.productId.toHexString() === productId)

        if (findedCart) {
            const removeProduct = await Cart.findOneAndUpdate({ userId }, {
                $pull: {
                    order: {
                        productId: new Types.ObjectId(productId)
                    }
                }
            }, { new: true })
            res.send(removeProduct)
        }
    }
})

module.exports = router