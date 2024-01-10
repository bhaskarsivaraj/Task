import mongoose from "mongoose";


const databaseConnection = async () => {
  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/stackoverflow_questions");

    console.log("Database connected successfully");

  } catch (error) {
    console.error("Error connecting to database");
  }
}

export default databaseConnection;