import { connectionstr } from "@/app/lib/db";
import { Restaurants } from "@/app/lib/restaurentMode";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    let queryParams = request.nextUrl.searchParams;
    let filter = {};
    if (queryParams.get("location")) {
        let city = queryParams.get("location")
        filter = { city: { $regex: new RegExp(city, 'i') } }
    }
    else if (queryParams.get("restaurent")) {
        let name = queryParams.get("restaurent")
        filter = { name: { $regex: new RegExp(name, 'i') } }
    }
    await mongoose.connect(connectionstr, { useNewUrlParser: true })
    const result = await Restaurants.find(filter);
    return NextResponse.json({ success: true, result })
}