import mongoose from "mongoose";
import dotenv from "dotenv";

//To fetch the env file from our project we use --->  `dotenv.config()`
dotenv.config();

const MongoDB=async()=>{
  try{
    await mongoose.connect(
      process.env.MONGODB_URL  //env filepath fetch
    );
    console.log("Connected to mongodb..");
  }
  catch(error){
      console.log(error.message);
      
  };
}


export default MongoDB;