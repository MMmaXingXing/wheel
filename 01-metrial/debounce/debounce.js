// 防抖清除
function debounce(fn, wait) {
  let timer;

  return function () {
    const _this = this;
    const args = arguments;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, wait);
  };
}

window.onrise = debounce(function () {
  console.log(debounce);
}, 500);
