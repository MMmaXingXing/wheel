const request = function (method, url, requestData = {}) {
  const { payload, header = {} } = requestData;
  return fetch(url, {
    method: method,
    body: payload || "",
    headers: new Headers({
      ...header
    })
  });
};
