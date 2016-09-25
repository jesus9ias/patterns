//  Module self-contained with a closure

var person = (function () {

  var instance;

  function init() {

    var name = "";
    var age = 0;

    function toUp(n) {
      return n.toUpperCase();
    }

    return {
      setAge: function(a) {
        age = a;
      },
      setName: function(n) {
        name = n;
      },
      getInfo: function() {
        console.log("My name is " + toUp(name) + " and I am " + age + " years old")
      }
    };
  }

  return {
    create: function() {
     if(!instance) {
       instance = init();
     }
     //instance = init();
     return instance;
   }
  };

})();


// Usage:

juan = person.create();
juan.setName("Juan");
juan.setAge(25);
juan.getInfo();

pepe = person.create();
//pepe.setName("Pepe");
//pepe.setAge(25);
pepe.getInfo();
