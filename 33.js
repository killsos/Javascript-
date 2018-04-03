Object.prototype.$super = function (params) {
  var result;
  try {
    console.log(eval(this.constructor));
    result = eval(this.constructor).prototype.constructor;
    result.apply(this, arguments);
  } catch (error) {
    throw new Error('only can be used in constructor');
  }
  return result;
}

function Person(name,age) {
  this.name = name;
  this.age  = age;
}

Person.prototype.show = function () {
  console.log(this.name + '---' + this.age);
}

function Child(name,age) {
  this.$super(name, age);
}

Child.prototype = new Person();

var child = new Child('killsos', 18);