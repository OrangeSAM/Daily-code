// 生成随机数
function getRandomNum(min, max) {
  let range = max - min;
  let rand = Math.random();
  return min + Math.round(rand * range);
}

function GetRandomUserName(min, max) {
  let tempStrArr = "12345667890qwertyuiopasdfghjkklzxcvbnmm".split("");
  let outPutText = "";
  for (let i = 1; i < getRandomNum(min, max); i++) {
    outPutText = outPutText + tempStrArr[getRandomNum(0, tempStrArr.length)];
  }
  return outPutText;
}

var startTime = new Date().getTime();
var tempInfo = [];
db.randInfo.drop();
for (let i = 0; i < 2000000; i++) {
  tempInfo.push({
    userName: GetRandomUserName(7, 16),
    registerTime: new Date(),
    random0: getRandomNum(100000, 999999),
    random1: getRandomNum(100000, 999999),
    random2: getRandomNum(100000, 999999),
    random3: getRandomNum(100000, 999999),
    random4: getRandomNum(100000, 999999),
    random5: getRandomNum(100000, 999999),
    random6: getRandomNum(100000, 999999),
    random7: getRandomNum(100000, 999999),
    random8: getRandomNum(100000, 999999),
    random9: getRandomNum(100000, 999999)
  });
}

db.randInfo.insert(tempInfo);
var spentTime = new Date().getTime() - startTime;

print("it cost" + spentTime);
