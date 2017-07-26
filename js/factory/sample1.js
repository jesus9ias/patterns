

function Car(options){
  this.data = {
    type: 'car',
    state: options.state || 'used',
    wheelSize: options.wheelSize || 'small',
    color: options.color || 'blue'
  }
}

function Truck(options){
  this.data = {
    type: 'truck',
    state: options.state || 'used',
    wheelSize: options.wheelSize || 'large',
    color: options.color || 'blue'
  }
}

function createCar(options) {
  if (options.wheelSize === 'small') {
    return new Car(options);
  }
  return new Truck(options);
}

var myCars = [];

myCars.push(createCar({
  state: 'used',
  wheelSize: 'small',
  color: 'red'
}));

myCars.push(createCar({
  state: 'new',
  wheelSize: 'large',
  color: 'blue'
}));

myCars.push(createCar({
  state: 'used',
  wheelSize: 'large',
  color: 'yellow'
}));

myCars.map(function(car) {
  console.info(car.data)
})
