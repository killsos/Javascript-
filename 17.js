var o = {};

(function(_obj){
    _obj.aa = function (params) {
        return 123;
    }
})(o)

console.log(o.aa());

(function (window) {
    
  })(window)