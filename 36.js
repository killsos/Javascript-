function One(params) {
    console.log(One.isDan);
    if (One.isDan === 0) {
        this.test = 123;
        One.isDan++;
    } else {
        // return {
        //     already: 'yes'
        // };
        throw new Erro('aleay');
    }
}

One.isDan = 0;

var one = new One();
console.log(one);
var two = new One();
console.log(two);

