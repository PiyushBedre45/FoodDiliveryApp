const { default: mongoose } = require("mongoose");


const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desrciption: {
        type: String,
        required: true,
        unique: true
    }
})

export const FoodItems = mongoose.models.foodItems || mongoose.model("foodItems", foodItemSchema);