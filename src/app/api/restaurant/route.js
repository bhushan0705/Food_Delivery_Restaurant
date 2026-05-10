import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import RestroModel from "@/app/models/RestroModel";

// getting data
export async function GET() {
  await connectDB();
  const data = await RestroModel.find({});
  return NextResponse.json({
    success: true,
    result: data,
  });
}

export async function POST(res, context) {
  await connectDB();
  const userData = await res.json();
  const preUser = await RestroModel.findOne({ email: userData.email });
  // login signup
  if (userData.login) {
    // login
    if (!preUser) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        {
          status: 400,
        },
      );
    }
    if (preUser.password !== userData.password) {
      return NextResponse.json(
        {
          message: "Incorrect password",
          success: false,
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        success: true,
        result: preUser,
      },
      {
        status: 200,
      },
    );
  } else {
    if (preUser) {
      return NextResponse.json(
        {
          message: "User already exists",
          success: false,
        },
        {
          status: 400,
        },
      );
    }
    const newUser = await RestroModel.create(userData);

    return NextResponse.json(
      {
        message: "New user created",
        success: true,
        result: newUser,
      },
      {
        status: 201,
      },
    );
  }
}
