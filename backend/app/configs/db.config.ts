import mongoose, { set } from "mongoose";

const connectDatabase = async () => {
  try {
    set('strictQuery', false);
    const mongoDBString = process.env.REMOTE_DATABASE_URL as string;
    const database = await mongoose.connect(mongoDBString);
    console.log("MongoDB connected to "+ database.connection.name);

  } catch (err) {
    console.log(err);
  }
}; 

export default connectDatabase;
