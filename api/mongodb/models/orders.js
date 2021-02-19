const mongoose = require('mongoose')
const Schema = mongoose.Schema


let orders_schema = new Schema({

  id: {
    type: ObjectId,
    required: true
  },
  user_id: {
    type: Date,
    required: true
  },
  rentaldate: {
    type: Date,
    default: new Date
  },
  returndate: {
    type: Date,
    default: new Date
  },
  
});

module.exports = mongoose.models('orders', orders_schema);