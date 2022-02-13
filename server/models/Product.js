const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: Schema.Types.ObjectId, ref: 'Category'
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    img: String,
    rate: Number
}, {
    timestamps: true
})

module.exports = model('Product', schema)