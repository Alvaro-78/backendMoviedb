const mongoose = require('mongoose')
const Schema = mongoose.Schema


let users_schema = new Schema({

  id: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  telephonenumber: {
    type: Number
  },
  dateofbirth: {
    type: Number,
    required: true
  }
  
});

module.exports = mongoose.models('users', users_schema);