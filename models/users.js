const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  bio:{
    type: String,
    require: true,
  },
  repostiories:{
    type: Array,
    require:true,
  },
  repositioriesCount:{
    type: Number,
    require: true,
  },
  followers:{
    type: Array,
    require: true,
  },
  followersCount:{
    type: Number,
    require: true,
  },
  followed:{
    type: Array,
    require: true,
  },
  followedCount:{
    type: Number,
    require: true,
  },
  badgets: {
    type: Array,
    require: true,
  },
  token:{
    type: String,
    require: true,
  },
  url:{
    type: String,
    require: true,
  },
  profile_photo:{
    type: String,
    require: true,
  },
  pinned: {
    type: Array,
    require: true,
  },
  stars:{
    type: Array,
    require: true,
  },
  starsCount: {
    type: Number,
    require: true,
  },
  secret: {
    type:String,
    require: true,
  },
  userStars: {
    type: Array,
    require: true,
  }
});

let user = mongoose.model("user", userSchema);
module.exports = user;
