import { connectionstr } from "@/app/lib/db";
import { Restaurants } from "@/app/lib/restaurentMode";
import mongoose from "mongoose";

const { NextResponse } = require("next/server");

// GET request to get all restaurants
export async function GET() {
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const restaurants = await Restaurants.find();
    return NextResponse.json({ success: true, restaurants });
}

// POST request for restaurant login and registration
export async function POST(request) {
    const restaurantDetails = await request.json();
    console.log(restaurantDetails);
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    let restaurant;
    let success = false;

    if (restaurantDetails.login) {
        restaurant = await Restaurants.findOne({ email: restaurantDetails.email, password: restaurantDetails.password });
        console.log("restaurent", restaurant)
        if (restaurant) {
            success = true;
        }
    } else {
        const data = new Restaurants(restaurantDetails);
        restaurant = await data.save();
        if (restaurant) {
            success = true;
        }
    }

    return NextResponse.json({ success, result: restaurant });
}