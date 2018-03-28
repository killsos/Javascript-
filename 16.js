var a = function abc() {  
    console.log('acb');
    
}

a();

a = null;

// a(); // TypeError

function bar (){
    console.log('bar');
}
bar();
global.bar = null;
delete global.bar;
// global.bar(); // 报错 TypeError
bar();

/**
 * 通过设置为null 或者 delete
 * 无法删除函数语句
 * 
 * 原因是:
 * 函数语句是对象的形式独立存在的
 * 无法删除
 * 
 * 其实global.bar是function bar对象的引用
 * function bar独立存在
 * 18报错 19可以正常运行 就说明了这个问题
 */

