// 获取深圳市人才补贴数据
const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const fs = require("fs");

let fileCount = 0; //文件量记数
let bulletinResult = [];
const getExcel = function(page = "") {
  request(
    {
      url: `http://hrss.sz.gov.cn/xxgk/qtxx/shgs/index${page}.htm`,
      method: "GET",
      encoding: null
    },
    function(error, response, body) {
      if (error || !body) {
        return;
      }
      let html = iconv.decode(body, "GB2312");
      const $ = cheerio.load(html);
      const list = $(".Listcont .ListconC"); //获取公示列表
      for (let i = 0; i < list.length; i++) {
        let singleCont = list.eq(i).find("a");
        let atitle = singleCont.text(); // 公示信息的标题
        let singleHref = singleCont.attr("href"); // 公示信息跳转链接
        let hrefsplit = singleHref.split("/");
        if (atitle.includes("人才租房")) {
          request(
            {
              url: `http://hrss.sz.gov.cn/xxgk/qtxx/shgs/${hrefsplit[1]}/${
                hrefsplit[2]
              }`,
              method: "GET",
              encoding: null
            },
            function(error, response, body) {
              if (error || !body) {
                console.log(error);
                return;
              }
              let html = iconv.decode(body, "GB2312");
              let _$ = cheerio.load(html);
              let fileList = _$(".fjstyle a");
              for (let i = 0; i < fileList.length; i++) {
                let href = fileList.eq(i).attr("href");
                let fileName = fileList.eq(i).text();
                let hrefSplit2 = href.split("/");
                let downloadUrl = `http://hrss.sz.gov.cn/xxgk/qtxx/shgs/${
                  hrefsplit[1]
                }/${hrefSplit2[1]}`;
                fileCount = fileCount + 1;
                bulletinResult.push({
                  title: fileName,
                  url: downloadUrl
                });
                fs.writeFileSync("result.json", JSON.stringify(bulletinResult));

                // downloadExcel(downloadUrl, fileName, function() {
                //   console.log(`${fileName}下载完毕`);
                // });
                console.log(fileCount);
              }
            }
          );
        }
      }
    }
  );
};

// 文件下载
function downloadExcel(url, filename, callback) {
  var stream = fs.createWriteStream(filename);
  request(url)
    .pipe(stream)
    .on("close", callback);
}

// 目前公示列表有30页
for (let i = 0; i < 30; i++) {
  if (i === 0) {
    getExcel();
  } else {
    getExcel(`_${i}`);
  }
}
