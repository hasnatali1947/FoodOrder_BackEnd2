const express = require("express");
const MyorderRoute = express.Router();
const OrdersModel = require("../models/orderModel")

MyorderRoute.get("/myOrderRoute", async (req, res) => {
    try {
        const myOrder = await OrdersModel.find({})
        res.send(myOrder)     
    } catch (error) {
        return res.status(500).json({ message: "Error fetching orders" })
    }
})

module.exports = MyorderRoute;