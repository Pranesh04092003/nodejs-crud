//import the express
import express from "express";

//router path configuration
const router = express.Router();

// Define routes for movie CRUD operations
/*
since we use middleware in the route.js the `movie` will become the child  
the parent is in the main.js ---> middleware `movie`  that is --> app.use('/movie',routemovie)
*/

//further we removed `/movie` from the main.js--to look the url short 

router.get('/movie', (req, res) => {
  // Read operation logic
  res.send('get all movie');
});

router.post('/movie', (req, res) => {
  // Create operation logic
  res.send('create new movie');
});

router.put('/movie:id', (req, res) => {
  // Update operation logic
  res.send('updated the movie');
});

router.delete('/movie:id', (req, res) => {
  // Delete operation logic
  res.send('deleted the movie');
});

//export the data  
export default router;
