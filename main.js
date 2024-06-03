const express = require("express");


const app = express();

const port = 3000;

//CRUD 

//read
app.get('/movie',(req,res)=>{
  
});

//Create
app.push('/movie',(req,res)=>{
  
});

//Update
app.put('movie:id',(req,res)=>{
  
});

//Delete
app.delete('/movie:id',(req,res)=>{
  
});


app.listen(port,()=>{
  console.log(`server is running on port http://localhost:${port}`);
})