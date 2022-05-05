function _new(constructor, ...arg) {
  var obj = {};
  obj.__proto__ = constructor.prototype;
  var res = constructor.apply(obj, arg);

  return Object.prototype.toString.call(res) === "[object Object]" ? res : obj;
}

const fun = function (name) {
  this.name = name;
};

console.log(_new(fun, "小明"));
