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


export const movieCreate=(req, res) => {
  // Create operation logic
        //`id,movie,descp`
  //requesting 
  console.log(req.body);
  // response
  return res.json(req.body);
 
}

export const movieUpdate=(req, res) => {
  // Update operation logic
  res.send('updated the movie');
}


export const movieDelete=(req, res) => {
  // Delete operation logic
  res.send('deleted the movie');
}