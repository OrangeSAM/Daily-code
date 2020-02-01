// 全文索引
db.randInfo.ensureIndex({ userName: "text" });

db.randInfo.find({ $text: { $search: "btbzpht" } });

// 如果不希望结果中出现某个单词 使用 -
// 如果搜索词出现空格 使用\
db.randInfo.find({ $text: { $search: '"love love" balala' } });
