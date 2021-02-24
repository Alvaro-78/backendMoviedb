const users = require( '../mongodb/schema/users' );
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const secretWord = process.env.JWT_SECRET || 'MiPezAzul'

class UsersController {


  async createUsers( user ) {

    user.password = await bcrypt.hash( user.password, 5 );
    return users.create( user );

  };

  async login( email,password ) {

    const user =  await users.findOne( { email } );

    if(!user){
      throw new Error( 'The email does not exist' )
    };

    if(!await bcrypt.compare( password, user.password )) {
      throw new Error( 'Wrong password' )
    };

    const payload = {

      userId: user.id,
      tokenCreationDate: new Date,

    };

    return jwt.sign(payload, secretWord);
    
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