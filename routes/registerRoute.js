const express = require("express");
const ragisterRouter = express.Router();
const Users = require("../models/register");

ragisterRouter.post("/register", async (req, res) => {
    const {name, email, password} = req.body;
    const newUser = new Users({
        name,
        email,
        password
    })
    try{
        await newUser.save()
        res.send("User Register successfully")
    } catch(err) {
        return res.status(400).json({message: err})
    }
})

module.exports = ragisterRouter;
