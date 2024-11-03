import mongoose from "mongoose";

export const ConnectDB =async()=>{
    await mongoose.connect('mongodb+srv://Blogger:Akkukannu%40123@cluster0.lzvna.mongodb.net/blog-app');

    console.log("DB connected");
}