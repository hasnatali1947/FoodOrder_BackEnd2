const mongoose = require("mongoose");

const ragisterSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require, default: false }
}, {
    timestamps: true,
}
)

const ragisterModul = mongoose.model("ragister", ragisterSchema)

module.exports = ragisterModul;
