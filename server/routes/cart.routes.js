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
            const userCart = mapCartDto(cart)
            res.send(userCart)
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
        if (!cart) {
            const userCart = await Cart.create({
                userId, order: [{
                    count: req.body.count, productId: new Types.ObjectId(req.body.id)

                }]
            })
            const userCartMap = mapCartDto(userCart)
            res.send(userCartMap)
        } else {
            const findedCart = cart.order.find(product => product.productId.toHexString() === req.body.id)

            if (findedCart) {
                await Cart.updateOne({
                    userId: userId,
                    order: {
                        $elemMatch: {
                            productId: new Types.ObjectId(req.body.id)
                        }}}, {'order.$.count' : req.body.count})
            } else {
                await Cart.findOneAndUpdate({ userId }, {
                    $push: {
                        order: {
                            count: req.body.count,
                            productId: new Types.ObjectId(req.body.id)
                        }
                    }
                })
            }
        }
    }
})


function mapCartDto(cart) {
    return cart.order.map(product => ({
        count: product.count, productId: product.productId.toHexString()
    }))
}


module.exports = router