const express = require("express")
const loginRouter = express.Router();
const Users = require("../models/register")

loginRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await Users.findOne({email});
    if(!user){
        return res.status(400).json({ message: "User not found" });
    }
    if(password !== user.password){
        return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({message: "Login successful", token: "your-generated-token"})
})

module.exports = loginRouter;