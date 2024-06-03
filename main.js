//import the express
import express  from "express";
//middleware path
import routemovie from "./routes/route.js"

const app = express();

const port = 3000;

//middlewares     `CLIENT ->MIDDLEWARE ->SERVER`  method for middleware is --->"use" 

app.use('/',routemovie)

app.listen(port,()=>{
  console.log(`server is running on port http://localhost:${port}`);
})