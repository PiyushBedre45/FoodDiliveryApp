import { connectionstr } from "@/app/lib/db";
import { FoodItems } from "@/app/lib/foodItemModel";
import { Restaurants } from "@/app/lib/restaurentMode";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const id = res.params.id;
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const restoDetails = await Restaurants.findOne({ _id: id })
    const foodDetails = await FoodItems.find({ resto_id: id })
    return NextResponse.json({ success: true, id, restoDetails, foodDetails });

}