


// import mongoose from "mongoose";

// const MONGODB_URL=`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.hkupbih.mongodb.net/${process.env.DB_NAME}`

// // const MONGODB_URL=`mongodb+srv://bhushandandavate7_db_user:upchuckarestrobhushandandavate@cluster0.hkupbih.mongodb.net/restroDB`

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;




import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;