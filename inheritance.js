QClass = function (classData) {
  var Class = function () {};
  for (var x in classData) {
    if (classData.hasOwnProperty(x)) {
      Class.prototype[x] = classData[x];
    }
  }
  return Class;
};
QClass.child = function (parent) {
  return parent;  
};
