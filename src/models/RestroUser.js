// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   image: String,

//   role: {
//     type: String,
//     enum: ["user", "restaurant_owner", "delivery_boy"],
//     default: "restaurant_owner",
//   },
// });

// export default mongoose.models.User ||
//   mongoose.model("User", UserSchema);

// /models/RestroUser.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  image: String,
  role: {
    type: String,
    enum: ["restaurant_owner", "user", "delivery_boy"],
    default: "restaurant_owner",
  },
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);