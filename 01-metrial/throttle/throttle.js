// 节流加锁
function throttle(fn, wait) {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, wait);
  };
}
