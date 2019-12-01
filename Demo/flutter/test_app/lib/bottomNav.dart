import 'package:flutter/material.dart';
import './pages/home.dart';
import './pages/mail.dart';
import './pages/page.dart';

class BottomNavigation extends StatefulWidget {
  @override
  _BottomNavigationState createState() => _BottomNavigationState();
}

class _BottomNavigationState extends State<BottomNavigation> {
  final _iconColor = Colors.pink;
  int _currentIndex = 0;
  // 声明List 中的类型是widget
  List<Widget> list = List();

  @override
  void initState() {
    // 这里的顺序需要和下方items一致
    list..add(Home())..add(Mail())..add(Page());

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: list[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
                color: _iconColor,
              ),
              title: Text(
                'home',
                style: TextStyle(color: _iconColor),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.email,
                color: _iconColor,
              ),
              title: Text(
                'mail',
                style: TextStyle(color: _iconColor),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.pages,
                color: _iconColor,
              ),
              title: Text(
                'page',
                style: TextStyle(color: _iconColor),
              )),
        ],
        currentIndex: _currentIndex,
        onTap: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
