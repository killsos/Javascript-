class Person {
  static print(){
    console.log('Hello world');
    
  }
}

Person.print();

function Work() {

}

Work.print = function () {
  console.log('Worker');
}

Work.print()