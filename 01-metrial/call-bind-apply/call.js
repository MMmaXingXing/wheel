// call 方法的作用是改变函数内部的this指向
// 传入参数分两部分，第一个参数是需要指向的this，后面的参数是实参列表 arg1，arg2，arg3...
// 我们要实现call方法的话，需要一步一步来处理

const context = require("koa/lib/context");

// 比如我们有一个函数
function getName() {
    return this.name;
}

// 还有一个对象
const obj = {
    name: "张三",
};

// 要实现

getName.call(obj); //张三

// 我们可以为Function增加一个call方法
Function.prototype.call = function (context) {
    context.fn = this;
    context.fn();
    delete context.fn;
};

// Symbol版本
Function.prototype.call = function (context) {
    const symbol = Symbol("fn");
    context[symbol] = this;
    context[symbol]();
    delete context[symbol];
};

// 待参数传递
Function.prototype.call = function () {
    const [ctx, ...args] = arguments;
    const symbol = Symbol("fn");
    ctx[symbol] = this || window;
    const result = ctx[symbol](...args);
    delete ctx[symbol];
    return result;
};
