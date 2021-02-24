const orders = require( '../mongodb/schema/orders' );
const films = require( '../mongodb/schema/films' )
const users = require( '../mongodb/schema/users' )



class OrdersController {

  async createOrderFilm( user_id, film_id ) {
  
    const userEntity = await users.findById( user_id );
    const movieEntity = await films.findById( film_id );

    if( !userEntity || !movieEntity ){

      throw new Error('ooops');
    };

    return await orders.create({

      user_id: user_id,
      film_id: film_id
        
    });
  };


  async indexAllOrderByCustomer( userId ) {

    orders.find({

      customerId: userId,

    });

  };

  async updateOrderByCustomer( userId ) {

    orders.findByIdAndUpdate({

      customerId: userId,

    });

  };

  async deleteOrderByCustomer( userId ) {

    orders.findByIdAndDelete({

      customerId: userId,

    });

  };

};


let ordersController = new OrdersController;
module.exports = ordersController;