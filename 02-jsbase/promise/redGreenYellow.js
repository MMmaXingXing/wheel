// 红绿灯问题
// 红灯三秒一次、绿灯一秒一次，黄灯两秒一次。如何让三个灯不断交替重复亮灯。

function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

function light(timer, cb) {
  return new Promise((reslove) => {
    setTimeout(() => {
      cb();
      reslove();
    }, timer);
  });
}

function step() {
  Promise.resolve()
    .then(() => light(300, red))
    .then(() => light(1000, green))
    .then(() => light(2000, yellow))
    .then(() => step());
}

step();
