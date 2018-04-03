function Person(n, a) {
  this.name = n;
  this.age = a;
  // this instanceof arguments.callee
  // this.constructor === arguments.callee
  if (this instanceof Person) {
    alert("new调用");
  } else {
    alert("函数调用");
  }
}
var p = new Person("jack", 30); // --> new调用
Person(); // --> 函数调用
