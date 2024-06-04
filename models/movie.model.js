import { Schema ,model} from "mongoose";

//write the schema
const schema = new Schema({
  tittle: {
    type:String,
    required:true

  },
  desc: {
    type:String,
  required:true
  }
});

// create your model 
const Movies= model("Movies",schema)


//export 
export default Movies;
