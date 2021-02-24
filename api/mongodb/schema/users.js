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
    type: Number,
  },
  address: {
    type: String,
  },
  telephonenumber: {
    type: String
  }
  
});

module.exports = mongoose.model('users', users_schema);