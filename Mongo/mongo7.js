// mongo 在js文本中的使用
var db = connect("company");
var result = db.workmate.find();

while (result.hasNext()) {
  printjson(result.next());
}

result.forEach(element => {
  printjson(element);
});
