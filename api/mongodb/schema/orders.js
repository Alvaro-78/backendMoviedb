const mongoose = require('mongoose')
const Schema = mongoose.Schema


let orders_schema = new Schema({

  film_id: {
    type: Schema.Types.ObjectId,
    refs: "films"
  },
  user_id: {
    type: Schema.Types.ObjectId,
    refs: "users"
  },
  rentaldate: {
    type: Date,
  },
  returndate: {
    type: Date,
  },
  
});

module.exports = mongoose.model('orders', orders_schema);