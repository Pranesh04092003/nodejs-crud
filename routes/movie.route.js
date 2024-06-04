//import the express
import express from "express";
import { 
  movieCreate,
  movieDelete,
  movieDetail,
  movieIndex,
  movieUpdate
} from "../controllers/movie.controller.js";


//router path configuration
const router = express.Router();

// Define routes for movie CRUD operations
/*
since we use middleware in the route.js the `movie` will become the child  
the parent is in the main.js ---> middleware `movie`  that is --> app.use('/movie',routemovie)
*/

//further we removed `/movie` from the main.js--to look the url short 

router.get('/movie',movieIndex );//since we added `CONTROLLER ` in the req,res we add the  what name we assigned in "controller.js"   ---

router.post('/movie',movieCreate);

router.get('/movie/:id',movieDetail);

router.put('/movie/:id',movieUpdate);

router.delete('/movie/:id',movieDelete );

//export the data  
export default router;
