function One(params) {
    console.log(One.isDan);
    if (One.isDan === 0) {
        this.test = 123;
        One.isDan++;
    } else {
        return {
            already: 'yes'
        };
    }
}

One.isDan = 0;
One.print = function () { 
    One.isDan++;
    console.log(One.isDan);
    
 }
var one = new One();
console.log(one);
var two = new One();
console.log(two);

One.print()

console.log(One.__proto__.toString());

console.log(Object.getPrototypeOf(Object.getPrototypeOf(new One())));

console.log([].Class);

