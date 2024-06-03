import Movies from "../models/movie.model.js";
//here we are adding the controller for the router 

/*
router.post('/movie', (req, res) => {
  
  res.send('create new movie');
});

the above code from the route.js was here with the some modification of specific part

`   (req, res) => {
  // Create operation logic
  res.send('create new movie');
}   `



We create the constant to store it   and  export it since more router are there add the `export` to each cred operation

*/ 

export const movieIndex = (req, res) => {
  // Read operation logic
  res.send('get all movie');
}


export const movieCreate=async (req, res) => {
  // Create operation logic
        //`id,movie,descp`
  //requesting 
  console.log(req.body);

  //validate to DB

    /*  new Movies({
      tittle: req.body.tittle,
      desc: req.body.desc
    })
    */   //add the const `newMovies`
    const newMovies=  new Movies({
      tittle: req.body.tittle,
      desc: req.body.desc
    });

    //await is used for the network operations  "when we use `await` we should add the `async`  "
    //save the data
    // `await newMovies.save();  `
    //now create the const to save it
    //const Movies=await newMovies.save();

  // response
  //return res.json(req.body);

  //for sucess and error we use `try catch `

  try {
    const Movies=await newMovies.save();
    return res.status (201).json (Movies);
    } catch (error) {
    return res.status(400).json({ message: error.message });
    }
 
};



export const movieUpdate=(req, res) => {
  // Update operation logic
  res.send('updated the movie');
}


export const movieDelete=(req, res) => {
  // Delete operation logic
  res.send('deleted the movie');
}