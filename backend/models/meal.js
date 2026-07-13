const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    userId: String,
    title: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meal", mealSchema);