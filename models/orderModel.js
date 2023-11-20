const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({

    name: { type: String, require: true },
    email: { type: String, require: true },
    userId: { type: String, require: true },
    orderItems: [],
    fullAddress: { type: Object, require: true },
    orderAmount: { type: Number, require: true },
    isDelivered: { type: Boolean, require: true, default: false },
    transactionId: { type: String, require: true }
},
    {
        timestamps: true
    }
)

const orderModel = mongoose.model('orders', OrdersSchema)

module.exports = orderModel;