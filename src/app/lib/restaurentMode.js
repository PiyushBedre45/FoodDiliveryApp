const { default: mongoose } = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

export const Restaurants = mongoose.models.restaurants || mongoose.model("restaurants", restaurantSchema);