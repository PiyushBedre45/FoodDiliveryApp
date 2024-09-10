import { connectionstr } from "@/app/lib/db";
import { FoodItems } from "@/app/lib/foodItemModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const id = res.params.id;
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const result = await FoodItems.find({ resto_id: id });
    return NextResponse.json({ success: true, result })
}

export async function DELETE(req, res) {
    const id = res.params.id;
    let success = false;
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const result = await FoodItems.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
        success = true;
    }

    return NextResponse.json({ success, message: "Item Delete", result })
}