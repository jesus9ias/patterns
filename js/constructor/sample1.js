//  Three forms to initialize an object


var obj1 = {};
var obj2 = Object.create( Object.prototype );
var obj3 = new Object();


// Four forms to add and get properties to an object

// 1. Dot syntax

obj1.someKey = "Hello World";
var value = obj1.someKey;
console.log(value);



// 2. Square bracket syntax

obj2["otherKey"] = "Hello every one";
var value = obj2["otherKey"];
console.log(value);



// 3. Object.defineProperty

Object.defineProperty( obj3, "akey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(obj3);

// Also exists a shorthand that makes the properti-creation resuable

var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};

// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );

// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

console.log(person);




// 4. Object.defineProperties

var obj4 = new Object();

Object.defineProperties( obj4, {
  "someKey": {
    value: "Hello World",
    writable: true
  },
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
});

console.log(obj4);
