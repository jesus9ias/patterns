//  Module self-contained with a closure

var myCar = (function () {

  var distance = 0;
  var on = false;

  return {
    move: function (d) {
      if (on === true) {
        distance += parseInt(d);
        console.log("he car advanced " + d + " miles and has run " + distance + " miles");
      }
    },

    turnOn: function () {
      console.log("The car is turned on");
      on = true;
    },

    turnOff: function () {
      console.log("The car is turned off");
      on = false;
    }
  };

})();


// Usage:

myCar.move(20);
myCar.turnOn();
myCar.move(50);
myCar.move(14);
myCar.turnOff();
