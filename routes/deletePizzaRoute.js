const express = require("express");
const deleteRouter = express.Router();
const pizzaModel = require("../models/pizzaModel")

deleteRouter.delete("/:pizzaId", async (req, res) => {
    const pizzaId = req.params.pizzaId

    try {
        const deletePizza = await pizzaModel.findByIdAndDelete(pizzaId)
        if (deletePizza) {
            res.status(200).json({ message: "pizza deleted successfully" })
        } else
            res.status(404).json({ message: "Pizza not found" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting pizza: " + error.message });
    }
})

module.exports = deleteRouter