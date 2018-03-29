function add(a) {
    console.log(a);
    var a = a + 1;
    var b = a;
    console.log(a);
    console.log(b);
}
add(1);

/**
 * 当局部变量a声明之前
 * 形参已经存在
 * 当在函数被引用a时
 * 实际引用的是形参
 * 
 * 当局部变量a声明时 形参已经存在
 * 但局部变量a还未在内存中形成
 * 因此 当众声明局部变量a时候 
 * 位于等号右侧的a是形参
 * 这里的两个a互不干扰
 * 
 * 当局部变量a声明之后
 * 形参已经存在
 * 但已被覆盖
 * 因此 在函数体引用a时
 * 实际引用的是局部变量a
 */

function print (b) {
    var b;
    console.log('没有赋值的', b);  
}

var b = 0;
print(b);

 /**
  * 如果局部变量仅仅是声明而没有赋值
  * 那么使用的将永远是形参
  * 因为能从内存中查到与形参同名的引用
  * 实际已经赋予形参同名的值
  */

  /**
   * 如果函数名与形参同名
   * 但在函数体内会使用形参
   * 而不是函数本身
   * 即不会形成递归
   */
function name(name) {
    console.log(name); 
}

name('hello');

function test(test) {
    console.log(test.name);
    test(); 
}

//test(test);
test(function prarm(){
    console.log('call');
})