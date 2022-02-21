const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    image: String,
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
    sex: {
        type: String,
        enum: ['male', 'female', 'other']
    }
}, {
    timestamps: true
})

module.exports = model('User', schema)