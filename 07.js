var s1 = 'abc';
var s2 = 'abc';

console.log(s1 == s2); // true
console.log(s1 === s2);// true

/**
 * s1 s2 在栈内指向同一个引用
 */

var s11 = new String('abc');
var s21 = new String('abc');

console.log(s11 == s21); // false
console.log(s11 === s21);// false

/**
 * 在堆内 s11 s21 都不指向一个对象
 */