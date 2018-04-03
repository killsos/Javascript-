function Person() {
  
}

Person.prototype.say = function () {
  function test(params) {
    console.log('This is ', this); // global
  }

  test();
}

let one = new Person();

one.say()