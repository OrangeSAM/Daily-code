import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Startup Name Generator',
      theme: new ThemeData(
        primaryColor: Colors.orangeAccent,
      ),
      home: new RandomWords(),
    );
  }
}

class RandomWords extends StatefulWidget {
  @override
  createState() => new RandomWordsState();
}

// RandomWordsState类保存随着用户滚动而无限增长的生成的单词对，以及喜欢的单词对。
class RandomWordsState extends State<RandomWords> {
  // 下划线开头为私有变量
  final _suggestions = <WordPair>[];
  // _saved是一个保存收藏单词的列表，Set 可去重
  final _saved = new Set<WordPair>();
  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('startup name Ganerater'),
        actions: <Widget>[
          new IconButton(icon: Icon(Icons.list), onPressed: _pushSaved)
        ],
      ),
      body: _buildSuggestions(),
    );
  }

  Widget _buildSuggestions() {
    // ListView是一个列表容器，而不是列表中的每一项。
    return new ListView.builder(
      padding: const EdgeInsets.all(10.0),
      itemBuilder: (context, i) {
        // 如果记数为奇数，直接返回一条分割线，后面的不会执行
        if (i.isOdd) return new Divider();

        final index = i ~/ 2;
        if (index >= _suggestions.length) {
          _suggestions.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggestions[index]);
      },
    );
  }

  Widget _buildRow(WordPair pair) {
    final alreadySaved = _saved.contains(pair);
    // contains 返回布尔类型，以检查单词是否添加到收藏夹中

    return new ListTile(
      title: new Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
      trailing: new Icon(alreadySaved ? Icons.favorite : Icons.favorite_border,
          color: alreadySaved ? Colors.red : null),
      onTap: () {
        setState(() {
          if (alreadySaved) {
            _saved.remove(pair);
          } else {
            _saved.add(pair);
          }
        });
      },
    );
  }

  void _pushSaved() {
    Navigator.of(context).push(
      new MaterialPageRoute(
        builder: (context) {
          final tiles = _saved.map(
            (pair) {
              return new ListTile(
                title: new Text(
                  pair.asPascalCase,
                  style: _biggerFont,
                ),
              );
            },
          );
          // ListTile的divideTiles()方法在每个ListTile之间添加1像素的分割线。
          // 该 divided 变量持有最终的列表项。
          final divided = ListTile.divideTiles(
            tiles: tiles,
            context: context,
          ).toList();

          return new Scaffold(
            appBar: new AppBar(
              title: new Text('Saved suggestions'),
            ),
            body: new ListView(
              children: divided,
            ),
          );
        },
      ),
    );
  }
}
