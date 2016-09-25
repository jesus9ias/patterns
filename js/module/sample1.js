// Object literals

var myModule = {
  car: "Jetta",
  color: "red",
  distance: 0,
  move: function(d) {
    this.distance += d;
  }
};

console.log(myModule);
console.log(myModule.distance);
myModule.move(50);
myModule.move(20);
console.log(myModule.distance);
