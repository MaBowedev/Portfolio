import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Education from "@/models/Education";



export const dynamic = "force-dynamic"

export async function POST(req) {
    try {

        await connectToDB();
        const extractData = await req.json()
        const saveData = await Education.create(extractData)

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: 'data saved successfully'
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'something went wrong! please try again'
            });
        }


    } catch (e) {
        console.log(e); 
         return NextResponse.json({
        success: false,
        message: 'something went wrong! please try again'
    })
    }

  
}