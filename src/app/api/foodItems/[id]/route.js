import { connectionstr } from "@/app/lib/db";
import { FoodItems } from "@/app/lib/foodItemModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const id = res.params.id;
    console.log(id)
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const result = await FoodItems.find({ resto_id: id });
    return NextResponse.json({ success: true, result })
}