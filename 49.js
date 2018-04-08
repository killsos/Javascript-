console.log(0, Array.prototype);

console.log(1, Object.getPrototypeOf(Array).toString());

console.log(2, (new Array()).__proto__);
