import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.ac_unit),
        title: Text('hhh '),
      ),
      body: new ListView(children: <Widget>[
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
          ],
        ),
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Column(
              children: <Widget>[
                Text('text'),
                Icon(
                  Icons.wallpaper,
                  color: Colors.deepOrange,
                )
              ],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
            Column(
              children: <Widget>[Text('text'), Icon(Icons.wallpaper)],
            ),
          ],
        ),
        Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            // container是容器
            Container(
              width: 140.0,
              height: 120.0,
              color: Colors.deepOrange,
              margin: EdgeInsets.only(left: 10.0),
              child: Icon(
                Icons.map,
                size: 100.0,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(left: 30.0),
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[Text('设备名称'), Text('这是有关设备的介绍')]),
            ),
            Container(
              color: Colors.red,
              padding: EdgeInsets.only(left: 50.0),
              child: Text('2020-1-1'),
            )
          ],
        ),
        // flex
        Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Flexible(
              child: Icon(
                Icons.map,
                size: 100.0,
              ),
              flex: 6,
            ),
            Flexible(
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[Text('设备名称'), Text('这是有关设备的介绍')]
              ),
              flex: 8,
            ),
            Flexible(
              flex: 2 ,
              child: Text('2029-2-2'),
            )
          ],
        )
      ]),
    );

//      floatingActionButton: FloatingActionButton(
//        onPressed: _incrementCounter,
//        tooltip: 'Increment',
//        child: Icon(Icons.add),
//      ), // This trailing comma makes auto-formatting nicer for build methods.
//    );
  }
}
