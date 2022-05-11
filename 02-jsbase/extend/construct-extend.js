// 构造函数实现继承
function Parent() {
  this.name = "parent";
  this.age = "50";
}

function Child() {
  Parent.call(this);
  this.type = "children";
}

Parent.prototype.id = "1";
var child1 = new Child();
console.log(child1.name);
console.log(child1.id);

// 构造继承实现了继承，可以打印出来父级的一些属性，但是访问不到父级原型上面的属性
