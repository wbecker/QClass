InheritanceTest = TestCase("Test Inheritance", {
  testFunctions: function () {
    var Parent = new QClass({
      fn: function () {}
    });
    var Child = QClass.child(Parent);
    childInstance = new Child();
    assertFunction("function is inherited", childInstance.fn);
  },
  testOverriding: function (){
    var Parent = new QClass ({
      fn: function () {
        return 0;
      }
    });
    var Child = QClass.child(Parent, {
      fn: function () {
        return 1;
      }
    });
    childInstance = new Child();
    assertEquals("Child function is called", 1, childInstance.fn());
  }
});
