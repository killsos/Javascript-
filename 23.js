var F;

function B() {
    var temp = '123';
    F = function () {
        console.log('闭包函数处理本地变量Temp的值', temp);   
    }
}

B()
F()
