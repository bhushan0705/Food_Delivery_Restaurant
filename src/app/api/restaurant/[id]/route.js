import connectDB from "@/app/lib/db";
import RestroModel from "@/app/models/RestroModel";
import { NextResponse } from "next/server";




export async function GET(req, context){
    try {
    await connectDB();
    const params = await context.params;
    const id = params.id
    const data = await RestroModel.findById(id);
    if(!data){
        return NextResponse.json({message:'data not found', success:false}, {status:404})
    }
    return NextResponse.json({success:true, result:data})
        
    } catch (error) {
    return NextResponse.json({message:'something went wrong'}, {status:404})
    }

}