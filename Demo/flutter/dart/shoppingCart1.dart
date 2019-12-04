// sam
class Meta {
  double price;
  String name;
  Meta(this.name, this.price);
}

// 定义商品 Item 类
class Item extends Meta {
  int count; // 商品数量属性
  Item(name, price, [this.count = 1]) : super(name, price);
  Item operator +(Item item) => Item(name + item.name,
      count * price + item.price * item.count, count + item.count);
}

abstract class PrintHelper {
  printInfo() => print(getInfo());
  getInfo();
}

// 定义购物车类
class ShoppingCart extends Meta with PrintHelper {
  DateTime date;
  String code;
  List<Item> bookings;

  double get price =>
      bookings.reduce((value, element) => value + element).price;

  ShoppingCart({name}) : this.withCode(name: name, code: null);
  ShoppingCart.withCode({name, this.code})
      : date = DateTime.now(),
        super(name, 0);
  String get cartInfo {
    String str = '';
    bookings.forEach((e) =>
        str += '${e.name}--${e.price}元--${e.count}个, 共${e.price * e.count}元\t');
    return str;
  }

  getInfo() => '''
          购物车信息:
          -----------------------------
           用户名:  $name
           优惠码:  ${code ?? '没有'} 
           总价:    $price
           日期:    $date
           >>>>>>>>> 商品详情 <<<<<<<<<<
           $cartInfo
           >>>>>>>>> 商品详情 <<<<<<<<<<
          -----------------------------
          ''';
}

void main() {
  ShoppingCart.withCode(name: '张三', code: '123456')
    ..bookings = [Item('苹果', 10.0, 10), Item('鸭梨', 20.0, 20)]
    ..printInfo();

  ShoppingCart(name: '李四')
    ..bookings = [Item('香蕉', 15.0, 15), Item('西瓜', 40.0)]
    ..printInfo();
}
