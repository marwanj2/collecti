const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({

    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      length:8
    },
    pic: {
      type: String,
      required: false,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },type:{
      type:String,
      enum:["citoyen","organisateur"],
    }
  },
  {
    timestamps: true,
  })
);

module.exports = User;
