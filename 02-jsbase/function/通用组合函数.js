function allComponse(...fns) {
  const length = fns.length;
  for(let i = 0; i < length; i++) {
    if (typeof fns[i] !== "function") {
      throw new TypeError("Expect arguments functions ");
    }

  }

  function componse(...args) {
    let index = 0;
    let result = length ? fns[index].apply(this, args) : args;
    while(++index < length) {
      result = fns[index].call(this, result);
    }
    return result;
  }

  return componse
}

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

const newFn = allComponse(double, square)
console.log(newFn(10))