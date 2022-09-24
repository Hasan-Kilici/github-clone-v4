const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let repoSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    stars: {
      type: Array,
      require: true,
    },
    starCount: {
      type: String,
      require: true,
    },
    forks: {
      type: Array,
      require: true,
    },
    forkCount: {
      type: String,
      require: true,
    },
    files: {
      type: String,
      require: true,
    },
    fileCount:{
      type: Number,
      require: true,
    },
    token: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    userToken: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      require: true,
    },
    readMe:{
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

let repos = mongoose.model("repos", repoSchema);
module.exports = repos;
