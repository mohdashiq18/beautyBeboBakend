require("dotenv").config();

const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://ashiq:Rashiq@cluster0.bqvhbdc.mongodb.net/frindly?retryWrites=true&w=majority");

module.exports = {
  connection,
};
