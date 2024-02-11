const express = require("express");
const orderRoute = express.Router();
const { v4: uuidv4 } = require('uuid');
const Stripe = require("stripe")("sk_test_51O6bQ9GaFip5Wq2GUXzRfLsrWso8G4waFNlhdG6177HzuGU2B4NnLMK6gIThD1pMjEf2ArcCPvwMvJFKhimMcDdz00UP42h0Yn")
const OrdersModel = require("../models/orderModel")

orderRoute.post("/orderRoute", (async (req, res) => {

    const { token, subTotal, cart } = req.body

    try {
        console.log("Received cart data:", cart);
        const customer = await Stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await Stripe.charges.create({
            amount: subTotal * 100,
            currency: "pkr",
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {

            const NewOrders = new OrdersModel({
                name: token.card.name,
                email: token.email,
                userId: token.id,
                orderItems: cart,
                fullAddress: {
                    street: token.card.address_line1,
                    City: token.card.address_city,
                    Country: token.card.address_country,
                    pinCode: token.card.address_zip,
                },
                orderAmount: subTotal,
                transactionId: token.card.id
            })
            await NewOrders.save()
            res.send("Payment Successfully")

        } else {
            res.send("Payment failed")
        }

    } catch (error) {
        return res.status(400).json({ message: "something went wrong" + error.message })
    }
}))

// ----------------------------




module.exports = orderRoute
