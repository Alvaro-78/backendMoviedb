const users = require( '../mongodb/schema/users' )
// const films = require( '../mongodb/schema/films' )
const orders = require( '../mongodb/schema/orders' )

class UsersController {


  async createUsers( user ) {

    return users.create( user );

  };

  async bringUsers( user ) {

    return users.findOne( user );

   };

   async bringAllUsers( user ) {

    return users.find( user );

   };

   async updateUsers( id , user ) {

    return users.findByIdAndUpdate( id, user,  { new: true } );

  };

  async removeUsers( id ) {

    return users.findByIdAndRemove( id );

   };

  async createOrderFilm( userId, filmId ) {
  
    orders.create({

    customerId: userId,
    filmId: filmId,
      
    });
  };
   
};



let usersController = new UsersController;
module.exports = usersController;