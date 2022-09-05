// 原型链实现继承
// ECMA262把原型链定义为ECMAScript的主要继承方式。
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
}

function SubType() {
  this.subproperty = true;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
  return this.subproperty;
}

let instance = new SubType();
console.log(instance.getSuperValue());
// subType的实例可以使用SuperType的方法



function Parent() {
  this.name = "parent";
  this.age = "50";
  this.testList = [1, 2, 3];
}

function Child() {
  this.type = "child";
}

Child.prototype = new Parent();
Parent.prototype.id = "1";
var child1 = new Child();
console.log(child1.name); // parent
console.log(child1.id); // 1
console.log(child1.testList); // 1

// 弥补了构造函继承的缺点，继承了原型上的属性

const child2 = new Child();
child1.testList[0] = 2;
console.log(child2.testList);

// 但是这种方法会遇见引用类型的变化问题
