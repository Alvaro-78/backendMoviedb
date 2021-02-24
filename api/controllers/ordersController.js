const orders = require( '../mongodb/schema/orders' );


class OrdersController {

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