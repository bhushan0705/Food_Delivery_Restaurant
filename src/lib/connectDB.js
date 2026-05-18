import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      // Already connected
      return;
    }
    await mongoose.connect(MONGODB_URL);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export default connectDB;
