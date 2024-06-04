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

export const movieIndex =async (req, res) => {
  // Read operation logic
 try {
  const Movie=await Movies.find()
  res.json(Movie)
 } catch (error) {
    res.json(500).json({message: error.message})
 }
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



export const movieUpdate=async(req, res) => { 
  // Validate the user input
  try {
    const newupdatedmovies = await Movies.findOneAndUpdate(
    { _id: req.params.id },
    {
    tittle: req.body.tittle,
    desc: req.body.desc,
    },
    {
        new:true
    }
  );
    res.status (200).json (newupdatedmovies );
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
}


//find particular movie by Id

export const movieDetail=async(req,res)=>{
  try {
    const Movie= await Movies.findById(req.params.id);
    if(Movie==null){
     return res.status(404).json({message:"cannot find movie"});
    }
    else{
      res.json(Movie)
    }
  } catch (error) {
   return res.status(500).json({message:error.message}) 
  }
}


export const movieDelete=async(req, res) => {
  // Delete operation logic
  const movieId = req.params.id;
  const foundMovie = Movies.findOne({ _id: movieId });
  try {
  await Movies.deleteMany({ _id: movieId });
  res.json({ message: "Movie deleted!" });
  } catch (error){
  res.status(500).json({ message: error.message });}
}