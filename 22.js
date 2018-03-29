function B() {
    var temp = 'abc';
    function  A() {
        console.log('闭包函数处理本地变量Temp的值', temp);   
    }
    return A;
}

var result = B();

console.log(result());
