// 这里我需要一个server部分将node转换好的数据通过接口转换出去

import http from "http";
import fs, { readFileSync } from "fs";
import { BASE_JSON } from "./mapper.js";
const PORT = 3000;

const server = http.createServer(function (request, response) {
  fs.readdir(BASE_JSON, (_, files) => {
    const allData = {};
    files.forEach((name) => {
      const key = name.slice(0, -5);

      const fileData = readFileSync(`${BASE_JSON}${name}`, "utf8");
      allData[key] = JSON.parse(fileData);
    });

    response.writeHead(200, { "Content-Type": "text/plan", charset: "utf8" });
    response.end(JSON.stringify(allData));
  });
});

server.listen(PORT, () => {
  console.log(`server listen ${PORT}`);
});
