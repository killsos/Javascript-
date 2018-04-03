function Person() {
  this.getSex = function () {
    return '男';
  }
}

function Worker() {
  var _sex = 'default';

  this.getSex = function () {
    return _sex;
  }

  this.setSex = function (value) {
    _sex = value;
  }
}


function Coder() {
  var _sex = 'default';

  return {
    getSex: function () {
      return _sex;
    },
    setSex: function (value) {
      _sex = value;
    }
  }
}
