// apply实现和call实现思路一致
Function.prototype.apply = function () {
    const [ctx, args] = arguments;
    const symbol = Symbol();
    ctx[symbol] = this || window;
    const result = ctx[symbol](...args);
    delete ctx[symbol];
    return result;
};
