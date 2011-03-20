InheritanceTest = TestCase("Test Inheritance", {
  testFunctions: function () {
    var Parent = new QClass({
      fn: function () {},
      value: "a value"
    });
    var Child = QClass.extend(Parent);
    childInstance = new Child();
    assertFunction("function is inherited", childInstance.fn);
    assertString("value is inherited", childInstance.value);
  },
  testOverriding: function (){
    var Parent = new QClass ({
      fn: function () {
        return 1;
      }
    });
    var Child = QClass.child(Parent, {
      fn: function () {
        return QClass.Super(arguments) + 2;
      }
    });
    childInstance = new Child();
    assertEquals("Child function is called", 3, childInstance.fn());
  }
});
