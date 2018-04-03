function Person() {
  
}

Person.prototype.say = function () {
  console.log('say');
}

let one = new Person();
let two = new Person();

one.say();
two.say();

two.__proto__.say = function () {
  console.log('sayed');
}

one.say();
two.say();