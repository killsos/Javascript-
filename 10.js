console.log(typeof undefined);
console.log(typeof null);
console.log(typeof false);
console.log(typeof 123);

let obj1 = {};
console.log(typeof obj1);

let obj2 = function() {};

console.log(typeof obj2);

let obj3 = [];
console.log(Object.prototype.toString.call(obj3) === '[object Array]');

let obj4 = new Date();
console.log(Object.prototype.toString.call(obj4)); // [object Date]

let sym = Symbol();
console.log(typeof sym);

let set = new Set();
console.log(Object.prototype.toString.call(set));

let wset = new WeakSet();
console.log(Object.prototype.toString.call(wset));

let map = new Map();
console.log(Object.prototype.toString.call(map));

let wmap = new WeakMap();
console.log(Object.prototype.toString.call(wmap));