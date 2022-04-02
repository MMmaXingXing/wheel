const request = function (method, url, otherData = {}) {
  const { onload, onerror, params } = otherData;
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    onload & onload();
  };
  xhr.onerror = function () {
    onerror & onerror();
  };
  xhr.open(method, url, true);
  xhr.send(params);
};

const post = function () {
  return request("post", url, otherData);
};
const get = function () {
  return request("post", url, otherData);
};
