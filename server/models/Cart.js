const { Schema, model } = require('mongoose')

const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    order: [{
            count: 0,
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            sumProduct: 0
    }]
}, {
    timestamps: true
})

module.exports = model('Cart', schema)