function Windw(params) {
  this.open = function () {  }
  this.close = function () {  }
}

function Door(params) {
  this.open = function () {  }
  this.close = function () {  }
}

function House(params) {
  this.openWindow = function () { 
     var Window = new window()
     window.open();
  }

  this.closeWindow = function () { 
    var Window = new window()
    window.close();
  }

  this.openDoor = function () { 
    var Door = new Door()
    window.open();
  }

  this.openDoor = function () { 
    var Door = new Door()
    Door.open();
  }
}