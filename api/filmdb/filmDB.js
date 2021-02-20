//Clase dende guardaremos la db y crearemos los métodos 
class FilmDB {

  state = [];

  constructor() {
    console.log( 'se ha creado una instancia de FilmDB' );
    this.state = [];
  };

  async findById( id ) {
    const instance = this.state[ id-1 ];
    if( !instance ) {
      throw new Error( 'Id not found' );
    };
    return instance
  };

  async updateById( id, object ){
    await this.findById( id );
    this.state[ id-1 ] = object;
    return object;
  };

  async deleteById( id ){
    return this.updateById( id,null );
  }

  async set( object ) {
    this.state.push( object )
    return this.state.length;
  }

  async get(){
    return this.state
    .map(( element, index ) => element ? { ...element, id:index+1 } : null)
    .filter(( element ) => element !== null)
    .slice( -10 );
  }
};

module.exports = FilmDB;