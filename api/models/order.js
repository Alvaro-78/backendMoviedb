
class Order {

  title;
  rentaldate;
  returndate;
  name;
  surname;
  dni;

  constructor(order) {
    this.title = order.title;
    this.rentaldate = order.rentaldate;
    this.returndate = order.returndate;
    this.name = order.name;
    this.surname = order.surname;
    this.dni = order.dni;
  };

};

module.exports = Order