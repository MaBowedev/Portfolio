import mongoose from "mongoose";


export default async function connectToDB(){
    try {
        await mongoose.connect('mongodb+srv://boeramarco:w5nPeSYcgYYiFFb3@cluster0.uaynokx.mongodb.net/')
        console.log('database connected successfully')
    } catch(e){
        console.log(e)
    }
}