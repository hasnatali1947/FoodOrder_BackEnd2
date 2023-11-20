const express = require("express");
const apiPizzasRoute = express.Router();
const pizzaModle = require("../models/pizzaModel")

apiPizzasRoute.post("/apiPizzasRoute", async (req, res) => {
    const { data } = req.body;

    const variants = [
      {
       small: data.smallPrice ,
       medium: data.mediumPrice ,
       large: data.largePrice 
      }
  ];
    const pizzaData = new pizzaModle({
        name: data.name,
        sizes: data.sizes,
        prices: variants,
        category: data.category,
        image: data.image,
        description: data.description,
    });

    try {
        await pizzaData.save();
        res.status(200).send("Pizzas Data saved");
      } catch (error) {
        console.error(error);
        res.status(500).send("Error saving pizza data");
      }
})

module.exports = apiPizzasRoute