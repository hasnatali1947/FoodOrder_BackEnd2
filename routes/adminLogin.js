const express = require("express");
const AdminLogin = express.Router();
const Admin = require("../models/register");

const userEmail = "admin@gmail.com"; 
const userPassword = "pakistan";

const bcrypt = require("bcrypt");

AdminLogin.post("/admin_panel", async (req, res) => {
  try {
    const { email, password } = req.body;

      if (email !== userEmail) {
    return res.status(401).json({ message: 'Invalid email' });
  }
    const user = await Admin.findOne({ email: userEmail.toLowerCase() });

    if (!user) {
      console.log('User not found.');
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log('Invalid password.');
      return res.status(401).json({ message: 'Invalid password' });
    }

    user.isAdmin = true;

    await user.save();

    console.log('User is now an admin.');
    return res.status(200).json({ message: 'User is now an admin.' });
  } catch (error) {
    console.error('Error during admin login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = AdminLogin;
