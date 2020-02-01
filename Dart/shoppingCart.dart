class Meta {
  double price;
  String name;
  Meta(this.name,this.price);
}

class Item2 extends Meta {
  int num;
  Item2(String name, double price,{this.num=1}) :super(name, price);
  Item2 operator + (Item2 item) => Item2(name + item.name,price * num + item.price *       item.num);
}

abstract class PrintHelper {
  printInfo() => print(getInfo());
  getInfo();
}

class ShoppingCart2 extends Meta with PrintHelper {
  DateTime date;
  String code;
  List<Item2> bookings;

  ShoppingCart2({name}) : this.withCode(name:name,code:null);
  ShoppingCart2.withCode({name,this.code}) : date = DateTime.now(),super(name, 0);

  double get price => bookings.reduce((value,element) => value + element).price;

  String get cardInfo {
    String str = "";
    bookings.forEach((v) =>
    str +='${v.name} ----- ${v.num}\n');
    return str;
  }

  getInfo() {
    return
        """
        购物车信息:
        -----------------------------
        用户名: $name
        优惠码: ${code??"没有"}
        $cardInfo
        总价: $price
        日期: $date
        -----------------------------
        """;
  }
}

void main() {
  ShoppingCart2.withCode(name: '张三', code: '123456')
  ..bookings = [Item2('苹果',10.0, num: 2), Item2('鸭梨',20.0, num: 3)]
  ..getInfo();
  
  ShoppingCart2(name:'李四')
  ..bookings = [Item2('香蕉',15.0), Item2('西瓜',40.0)]
  ..getInfo();
}
