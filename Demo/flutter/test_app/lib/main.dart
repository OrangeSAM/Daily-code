import 'package:flutter/material.dart';
import './bottomNav.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'flutter 底部栏demo',
        theme: ThemeData.light(),
        home: BottomNavigation());
  }
}
