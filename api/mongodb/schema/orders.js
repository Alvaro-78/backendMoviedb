const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


let orders_schema = new Schema({

  user_id: { 
    type: ObjectId,
  },
  film_id: { 
    type: ObjectId,
  },
  rental_date: {
    type: Date,
    default: new Date
  },
  return_date: {
    type: Date,
    default: new Date(+new Date() + 7*24*60*60*1000)
  },
  
});

module.exports = mongoose.model('orders', orders_schema);