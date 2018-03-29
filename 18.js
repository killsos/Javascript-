function add (a, b){
    return a+ b;
}

var _add = new Function("a", "b","return a + b;")

console.log(add(1, 2));
console.log(_add(1, 2));;
