function Person() {
}

// Person.prototype.__proto__ === Object.prototype

function Child() {
}

Child.prototype = new Person();

// Child.prototype.__proto__ === Person.prototype

// Child.Prototype.__proto__.__proto__ === Object.prototype

console.log(Array.__proto__  === Array.prototype);
