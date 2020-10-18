import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/friends", {
  useMongoClient: true,
});

const friendsSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  secondName: {
    type: String,
  },
  gender: {
    type: String,
  },
  hobbies: {
    type: [String],
  },
});

const Friends = mongoose.model("friends",friendsSchema);

export default Friends
