const mongoose = require('mongoose')
const Schema = mongoose.Schema


let films_schema = new Schema({

  id: {
    type: String,
  },
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  year: {
    type: Number,
  }
  
});

module.exports = mongoose.model('films', films_schema);