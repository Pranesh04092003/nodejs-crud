import { Schema ,model} from "mongoose";

//write the schema
const schema = new Schema({
  tittle: String,
  desc: String,
});

// create your model 
const Movies= model("Movies",schema)


//export 
export default Movies;
