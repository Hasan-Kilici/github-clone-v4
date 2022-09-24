const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let apiSchema = new Schema({
  username: {
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
  url:{
    type: String,
    require: true,
  }
});

let api = mongoose.model("api", apiSchema);
module.exports = api;
