function Person() {
  
}

function Child(params) {
  
}

Child.prototype = new Person()

/**
 * Child类的父类的原型对象
 * 是Person的原型对象
 * 
 * 所以 
 * Child.prototype.__proto__ ===  Person.prototype
 * Child类的父类的原型对象
 * 
 * Person.prototype.__proto__ ===  Object.prototype
 * 
 * Child.prototype.__proto__.__proto__ ===  Object.prototype
 */
