//import the express
import express  from "express";
//middleware path
import routemovie from "./routes/movie.route.js"
import MongoDB from "./lib/db.js";

const app = express();

const port = 3000;

//DB connect
MongoDB();

//middleware to json reponse  "data understanding method "
app.use(express.json());

//middlewares     `CLIENT ->MIDDLEWARE ->SERVER`  method for middleware is --->"use" 

app.use('/',routemovie)

app.listen(port,()=>{
  console.log(`server is running on port http://localhost:${port}`);
})