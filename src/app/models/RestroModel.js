import mongoose from "mongoose";

const restroSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  re_entered_password: {
    type: String,
    required: true,
  },
  retaurantName: {
    type: String,
    required: true,
  },
  resCity: {
    type: String,
    required: true,
  },
  resAddress: {
    type: String,
    required: true,
  },
  resContactNo: {
    type: String,
    required: true,
  }

});

const RestroModel =
  mongoose.models.restaurants ||
  mongoose.model("restaurants", restroSchema);

export default RestroModel;