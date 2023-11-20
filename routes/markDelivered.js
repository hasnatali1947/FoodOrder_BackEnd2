const express = require("express");
const markDelivered = express.Router();
const OrdersModel = require("../models/orderModel")

markDelivered.put("/markDelivered/:orderId", async (req, res) => {
    const orderId = req.params.orderId;

    try {
        console.log("Updating order status for orderId: ", orderId);
        const updatedOrder = await OrdersModel.findOneAndUpdate(
            { _id: orderId },
            { $set: { isDelivered: true } },
            { new: true }
          );
        if (updatedOrder) {
            res.status(200).json(updatedOrder);
            console.log("Order status updated successfully.");
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.error("Error updating order status: ", error);
        res.status(500).json({ message: "Error marking order as delivered: " + error.message });
    }
});

module.exports = markDelivered;
