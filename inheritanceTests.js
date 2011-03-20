var t1 = new YUITest.TestCase({
  name: "Test inheritance",
  testInheritFunctions: function () {
    var Parent = new QClass({
      fn: function () {}
    });
    var Child = QClass.child(Parent);
    childInstance = new Child();
    YUITest.Assert.isFunction(childInstance.fn);
  }
});
YUITest.TestRunner.add(t1);

