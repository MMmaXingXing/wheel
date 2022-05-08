import fs from "fs";
import csv from "node-csv";
import { BASE_EXCLE, BASE_JSON } from "./mapper.js";

fs.readdir(BASE_EXCLE, function (err, files) {
  if (err) {
    return console.error("请检查是否进行了代码变动");
  }

  files.forEach((fileName) => {
    csv.createParser().parseFile(BASE_EXCLE + fileName, function (_, csv) {
      const fileData = getFileData(csv);
      const baseName = fileName.slice(0, -4);
      toWriteFile(`${BASE_JSON}${baseName}.json`, JSON.stringify(fileData));
    });
  });
});

const getFileData = (csv) => {
  const keyList = csv.shift();
  let fileData = [];
  let fileItem = {};
  csv.forEach((item) => {
    keyList.forEach((key, index) => {
      fileItem[key] = item[index];
    });
    fileData.push(fileItem);
    fileItem = {};
  });
  return fileData;
};

const toWriteFile = (fileUrl, fileData) => {
  fs.writeFile(fileUrl, fileData, {}, (res) => {
    if (res) return console.error("文件读取出错，请向管理员反馈");
    console.log(`${fileUrl}生成成功`);
  });
};
