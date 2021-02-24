const users = require( '../mongodb/schema/users' )

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
   
};



let usersController = new UsersController;
module.exports = usersController;