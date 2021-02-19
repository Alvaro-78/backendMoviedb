const mongoose = require('mongoose')
const Schema = mongoose.Schema


let films_schema = new Schema({

  id: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: false
  }
  
});

module.exports = mongoose.models('films', movies_schema);