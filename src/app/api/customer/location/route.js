import { connectionstr } from "@/app/lib/db";
import { Restaurants } from "@/app/lib/restaurentMode";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    let result = await Restaurants.find()
    result = result.map((item) => item.city.charAt(0).toUpperCase() + item.city.slice(1)); // First letter to upper case
    result = [...new Set(result.map((item) => item))] //Remove multiple
    return NextResponse.json({ success: true, message: "Resto At This Location", result })
}