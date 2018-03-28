console.log(a);

if (true) { // 1
    function a() {
        console.log('a'); 
    }
}

a();

/**
 * 在1处 就是为true
 * 函数a也不会预声明
 * 这一点需要注意
 * 
 * 同时if花括号不具有范围作用
 * 可以在花括号外调用函数a
 */
