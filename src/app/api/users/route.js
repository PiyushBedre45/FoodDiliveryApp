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
    let users;
    let success = false;
    if (userDetails.login) {
        users = await User.findOne({ email: userDetails.email, password: userDetails.password })
        console.log(" user :", users)
        if (users) {
            success = true;
        }
    }
    else {

        const data = new User(userDetails);
        users = await data.save()
        if (users) {
            success = true;
        }
    }

    return NextResponse.json({ success, result: users })
}