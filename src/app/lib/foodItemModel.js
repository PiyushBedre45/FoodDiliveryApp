const { default: mongoose } = require("mongoose");


const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    resto_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const FoodItems = mongoose.models.foodItems || mongoose.model("foodItems", foodItemSchema);