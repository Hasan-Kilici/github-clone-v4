const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let fileSchema = new Schema({
  fileOrString: {
    type: String,
    require: true,
  },
  filename:{
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
  repoToken: {
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
  token:{
    type: String,
    require: true,
  },
  username:{
    type: String,
    require: true,
  }
});

let files = mongoose.model("files", fileSchema);
module.exports = files;
