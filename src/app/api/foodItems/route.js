import { connectionstr } from "@/app/lib/db";
import { FoodItems } from "@/app/lib/foodItemModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionstr, { useNewUrlParser: true })
    const foodItems = await FoodItems.find();
    return NextResponse.json({ success: true, foodItems })
}

export async function POST(request) {
    const foodItems = await request.json();
    console.log(foodItems);
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const data = new FoodItems(foodItems)
    const food = await data.save()
    return NextResponse.json({ success: true, result: food })
}

