QClass = function (classData) {
  var Class = function () {};
  QClass.mixin(Class.prototype, classData);
  return Class;
};
QClass.mixin = function (base, extras) {
  for (var x in extras) {
    if (extras.hasOwnProperty(x)) {
      base[x] = extras[x];
    }
  }
};
QClass.child = function (Parent, classData) {
  var Child = function () {
    Parent.apply(this, arguments);
  };
  QClass.mixin(Child.prototype, Parent.prototype);
  QClass.mixin(Child.prototype, classData);
  return Child;  
};
