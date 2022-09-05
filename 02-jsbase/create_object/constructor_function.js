// 构造函数模式
// 工厂模式创建的对象在此处可以如下方式组织
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  this.sayName = function () {
    console.log(this.name);
  }
}

const person1 = new Person("张三", 14, 1212);
