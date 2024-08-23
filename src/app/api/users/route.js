import { connectionstr } from "@/app/lib/db";
import { User } from "@/app/lib/userModel";
import mongoose from "mongoose";


const { NextResponse } = require("next/server");

// GET request to get all users

export async function GET() {
    await mongoose.connect(connectionstr, { useNewUrlParser: true })
    const users = await User.find();

    return NextResponse.json({ success: true, users })
}

//  POST request 

export async function POST(request) {
    const userDetails = await request.json();
    console.log(userDetails);

    await mongoose.connect(connectionstr, { useNewUrlParser: true })

    const data = new User(userDetails);

    const users = await data.save()
    console.log(data);

    return NextResponse.json({ success: true, result: users })
}