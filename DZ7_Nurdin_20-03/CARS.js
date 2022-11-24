class CarsBMW {
  constructor(part) {
    this.model = part.model;
    this.color = part.color;
    this.wheeles = part.wheeles;
  }
  start() {
    console.log("Машина заведена");
  }
}
const Bmw_X5 = new CarsBMW({
  model: "BMW",
  color: "red",
  wheeles: 4,
});
console.log(Bmw_X5);
Bmw_X5.start();

/////////////////////////////

class CarsToyota extends CarsBMW {
  constructor(part) {
    super(part);
    this.engine = part.engine;
  }
}
const toyotCorolla = new CarsToyota({
  model: "Toyota",
  color: "green",
  wheeles: 4,
  engine: "b20b",
});
console.log(toyotCorolla);
toyotCorolla.start();

/////////////////////////////

class CarsNissan extends CarsToyota {
  constructor(part) {
    super(part);
    this.steeringWheel = part.steeringWheel;
  }
}
const nissan_X_Trail = new CarsNissan({
  model: "Toyota",
  color: "green",
  wheeles: 4,
  engine: "d15b",
  steeringWheel: "right",
});
console.log(nissan_X_Trail);
nissan_X_Trail.start();

/////////////////////////////

class CarsAudi extends CarsNissan {
  constructor(part) {
    super(part);
    this.yearOfIssue = part.yearOfIssue;
  }
}
const audi_Q5 = new CarsAudi({
  model: "Toyota",
  color: "green",
  wheeles: 4,
  engine: "k4m",
  steeringWheel: "right",
  yearOfIssue: 1993,
});
console.log(audi_Q5);
audi_Q5.start();

////////////////////////////////////////////////////////////////////
//yearOfIssue --- год выкуска
// steeringWheel --- руль
// engine --- двигатель
////////////////////////////////////////////////////////////////////
