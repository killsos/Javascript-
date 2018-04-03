/**
 * this取决于函数/方法的调用方式
 * this 执行上下文
 * 
 */

 function warp() {

   function Person() {
     var temp = '1234';
     this.B = function () {
       return this.A;
     }

     this.A = function () {
       console.log(temp);
       console.log(this);
       
     }
   }

   var one = new Person();
   var Fn = one.B();
   Fn(); // global
 }

 warp();