// 皇上
class Meta {
  double totalPrice;
  String name;

  Meta(this.name, this.totalPrice);
}

class Item extends Meta {
  int quantity;
  double unitPrice;

  Item(name, this.unitPrice, [int this.quantity = 1])
      : super(name, unitPrice * quantity);

  Item operator +(Item item) =>
      Item(name + item.name, totalPrice + item.totalPrice);
}

abstract class PrintHelper {
  printInfo([bool withDetail = false]) => print(getInfo(withDetail));

  getInfo(withDetail);
}

class ShoppingCart extends Meta with PrintHelper {
  DateTime date;
  String code;
  List<Item> bookings;

  bool get hasBooking => 0 != (bookings?.length ?? 0);

  double get totalPrice => hasBooking
      ? bookings.reduce((value, element) => value + element).totalPrice
      : 0.0;

  ShoppingCart({name}) : this.withCode(name: name, code: null);

  ShoppingCart.withCode({name, this.code})
      : date = DateTime.now(),
        super(name, 0);

  String get detailInfo {
    if (!hasBooking) {
      return "\t丫的啥都没买还想要明细";
    }
    var buffer = new StringBuffer();
    buffer.write("\t**********商品详情**********\n");
    buffer.write("\t商品名称   单价   数量   价格");
    bookings.forEach((value) => {
          buffer.write("\n\t"),
          buffer.write(value.name),
          buffer.write(value.unitPrice.toStringAsFixed(2).padLeft(10)),
          buffer.write(value.quantity.toString().padLeft(4)),
          buffer.write(value.totalPrice.toStringAsFixed(2).padLeft(10)),
        });
    return buffer.toString();
  }

  @override
  getInfo(withDetail) => '''
购物车信息:
-----------------------------
  用户名: $name
  优惠码: ${code ?? "没有"}
  总价: ${totalPrice.toStringAsFixed(2)}
  Date: $date
${withDetail ? "${detailInfo}" : "\t不打印小票信息"}
-----------------------------
''';
}

void main() {
  print("======================有小票的===========================");
  ShoppingCart shoppingCart = ShoppingCart.withCode(name: '假王五')
    ..bookings = [Item('瘦肉', 10.0, 8), Item('排骨', 20.0), Item('猪蹄', 30.0)]
    ..printInfo();
  print(shoppingCart.detailInfo);
  print("======================================================\n");

  ShoppingCart.withCode(name: '张三', code: '123456')
    ..bookings = [Item('苹果', 10.0), Item('鸭梨', 20.0)]
    ..printInfo();

  // ShoppingCart(name: '李四')
  //   ..bookings = [Item('香蕉', 15.0), Item('西瓜', 40.0)]
  //   ..printInfo();

  // ShoppingCart.withCode(name: '王五', code: '德玛西亚')
  //   ..bookings = [Item('苹果', 10.0, 50), Item('鸭梨', 20.0, 6), Item('香蕉', 100.0)]
  //   ..printInfo(true);

  // ShoppingCart.withCode(name: '李狗蛋')..printInfo(true);

  // ShoppingCart.withCode(name: '王富贵')
  //   ..bookings = []
  //   ..printInfo(true);
}
