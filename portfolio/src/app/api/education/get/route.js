import connectToDB from "@/database"
import { NextResponse } from "next/server"

import Education from "@/models/Education";



export const dynamic = "force-dynamic"

export async function GET(req) {
    try {


        await connectToDB()
        const extractData = await Education.find({})

        if (extractData) {
            return NextResponse.json({
                success: true,
                data: extractData
            })
        } else {
            return NextResponse.json({

                success: false,
                message: 'Something went wrong! Please try again'

            })
        }

    } catch (e) {
        console.log(e)
        return NextResponse.json({

            success: false,
            message: 'Something went wrong! Please try again'

        })

    }
}
