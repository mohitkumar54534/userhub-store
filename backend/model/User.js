//user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  ID: {
    type: Number,
    required: true,
  },
      first_name: {
        type: String,
        required: true,
      },  
      last_name: {
        type: String,
        required: true,
      },   
      email: {
        type: String,
        required: true,
      },
  gender: {
    type: String,
    required: true,
  },
 image: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
    available: {
    type: Boolean,
    required: true,
  },
  team: {
    type: String,
    default: null,
  }
});

module.exports = mongoose.model("User", userSchema);

// books