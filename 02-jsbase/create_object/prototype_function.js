// 继承模式

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype.sayName = function() {
  console.log(this.name)
}