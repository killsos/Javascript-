function Person() {

}

Person.prototype = 'test';

console.log('prototype', new Person().__proto__);
