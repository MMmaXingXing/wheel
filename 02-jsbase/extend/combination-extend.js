// 组合继承
// 解决我们前面遇见的引用类型赋值问题
function Parent() {
  this.name = "parent";
  this.testList = [1, 2, 3];
}

function Child() {
  Parent.call(this);
  this.type = "child";
}

// 这种情况会使parent被调用两次
Child.prototype = new Parent();
// 优化方案
// Child.prototype = Parent.prototype; // 将对象引用指向
// 上面引起了构造函数紊乱
// 优化方案
// Child.prototype.constructor = Child;
// 可以解决Children构造函数紊乱的问题
// 但是父类构造函数紊乱的情况依然存在
// 使用中间值来解决这个问题
// Child.prototyp.constructor = Object.create(Parent.prototype)
// 第二种写法
// Object.setPrototypeOf(Child.prototype,Parent.prototype);
// Child.prototyp.constructor = Child; // 将对象引用指向
Parent.prototype.id = "1";
const child1 = new Child();
console.log(child1.name);
console.log(child1.id);
const child2 = new Child();
child1.testList[0] = 2;
console.log(child2.testList);
