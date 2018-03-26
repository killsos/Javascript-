let furit1 = 'apple';
let furit2 = 'orange';
let furit3 = 'banana';

let arr = [furit1, furit2, furit3];

/**
 * 当穿件数组时 就会在堆内创建一个数组对象
 * 并且在栈内创建一个对数组的引用
 * 
 * javascript堆不需要显式释放
 * 因为堆是由JS引擎自动的垃圾回收来负责
 * 是否回收根据引用次数
 * 
 * 而 通过赋值null来显式释放
 * 
 */