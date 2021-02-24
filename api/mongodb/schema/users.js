const mongoose = require('mongoose')
const Schema = mongoose.Schema


let users_schema = new Schema({

  id: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  dni: {
    type: String,
  },
  address: {
    type: String,
  },
  telephonenumber: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  }
  
});

module.exports = mongoose.model('users', users_schema);