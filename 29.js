function Person() {
  return {
    name: 'killsos',
    showName: function () {
      console.log(this.name);
      
    }
  }
}

let one = Person();

one.showName()

let two = new Person();

two.showName()