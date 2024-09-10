import { connectionstr } from "@/app/lib/db";
import { FoodItems } from "@/app/lib/foodItemModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    const id = res.params.id;
    console.log(id)
    let success = false;
    await mongoose.connect(connectionstr, { useNewUrlParser: true })
    const result = await FoodItems.findOne({ _id: id })
    if (result) {
        success = true;
    }
    return NextResponse.json({ success, result })
}

export async function PUT(req, res) {
    let success = false;
    const id = res.params.id;
    const data = await req.json();
    await mongoose.connect(connectionstr, { useNewUrlParser: true });
    const result = await FoodItems.findOneAndUpdate({ _id: id }, data);
    if (result) {
        success = true;
    }
    return NextResponse.json({ success, message: "edit items", result })
}