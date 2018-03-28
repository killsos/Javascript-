/**
 * 嵌套函数定义与调用
 * 
 * 内层函数得作用范围
 * 只在自己的直接包含自己的函数
 * 中调用
 * 
 * 
 */

//  function a() {  
//     function b() {
//          console.log('b');
         
//     }
//     b();
//  }

//  a();

function a1() {  
    function b1() {
        console.log('b');
        function c1(params) {
            console.log('c1');
        }
        c1(); // √
    }
    b1();
    // c1(); // 此处调用不会报错referenceError
 }

 a1();