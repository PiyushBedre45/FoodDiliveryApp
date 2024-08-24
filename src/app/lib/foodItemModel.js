const { default: mongoose } = require("mongoose");


const foodItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

export const FoodItems = mongoose.models.foodItems || mongoose.model("foodItems", foodItemSchema);