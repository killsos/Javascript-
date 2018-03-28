var add = function (params) {
    
}

// 上面这个函数就是匿名函数

var multi = function mm() {
    console.log(mm);
    console.log(mm.name);
}

// console.log(mm);  
// 这样声明的函数 函数名之内函数内部使用
// 此处会报错 referenceError
// 但是加上好处 便于调试
// 在调用栈中

console.log(multi.name); // mm

multi()
