// bind会返回一个新函数，新函数执行时的this是bind方法的第一个参数
// 根据这些特征，我们可以根据刚才的apply来实现一个bind方法

Function.prototype.bind = function () {
    const [ctx, ...args] = arguments;
    const self = this;
    return function () {
        self.apply(args);
    };
};

// 以上绑定this的功能就实现了，
//但是bind其实是可以传递参数的，bind返回的时候也是可以传递参数的，同时调用bind方法是有返回值的
//因此我们要做一下处理
Function.prototype.bind = function () {
    const [ctx, ...args] = arguments;
    const self = this;
    return function () {
        // arguments调用bind会返回函数，此函数被调用时被传瑞的参数需要一起连接在一起
        // 以下代码来进行处理
        return self.apply(ctx, args.concat(arguments));
    };
};

// 由于bind返回的函数时可以作为狗赞函数的，作为构造函数的函数，之前绑定的this会被忽略。
// 我们在下面的处理中需要保证bind返回的函数可以继承道调用函数的原型
// 我们需要修改bind返回的函数的原型是this的原型
// 以下进行代码实现

Function.prototype.bind = function () {
    const [ctx, args] = arguments;
    const self = this;
    const newFunc = function () {
        // 此处this会被变更为 调用bind之后的方法的this
        // 即this = func.bind(this);
        return self.apply(
            this instanceof newFunc ? this : (ctx, args.concat(arguments))
        );
    };

    newFunc.prototype = self.prototype;
    return newFunc;
};

// 接下来我们发现，bind对于函数的原型也不会修改，我们要怎么处理呢？
// 我们可以使用中间函数来继承，方案如下
Function.prototype.bind = function () {
    if (typeof this !== "function") {
        throw new Error("Must be function to call bind");
    }

    const [ctx, args] = arguments;
    const self = this;
    var centerFunc = function () {};
    const newFunc = function () {
        // 此处this会被变更为 调用bind之后的方法的this
        // 即this = func.bind(this);
        return self.apply(
            this instanceof newFunc ? this : (ctx, args.concat(arguments))
        );
    };

    centerFunc.prototype = self.prototype;
    newFunc.prototype = new centerFunc();
    return newFunc;
};
// 以上，我们就将bind方方法相对比较完整的实现了一遍。
