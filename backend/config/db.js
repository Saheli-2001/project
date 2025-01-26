import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saheli:AvGn7J7SZoX2cVOH@cluster0.a1iuw.mongodb.net/zomato').then(()=>console.log("DB Connected"));
}