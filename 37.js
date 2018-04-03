function Foo() {
  if (!(this instanceof Foo)) {
    return new Foo();
  }
}
