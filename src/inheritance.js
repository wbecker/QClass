QClass = function (classData) {
  var Class = function () {};
  QClass.mixin(Class.prototype, classData);
  return Class;
};
QClass.mixin = function (base, extras) {
  var originalFn;
  for (var x in extras) {
    if (extras.hasOwnProperty(x)) {
      if (base.hasOwnProperty(x) && (typeof(base[x]) === "function"))  {
        originalFn = base[x];
        base[x] = function () {
          var fn = extras[x];
          return fn.apply(this, arguments);
        };
        base[x].Super = originalFn;
      }
      else {
        base[x] = extras[x];
      }
    }
  }
};
QClass.extend = function (Parent, classData) {
  var Child = function () {
    Parent.apply(this, arguments);
  };
  QClass.mixin(Child.prototype, Parent.prototype);
  QClass.mixin(Child.prototype, classData);
  return Child;  
};
QClass.Super = function (args) {
  return args.callee.caller.Super.apply(this, args);
};
