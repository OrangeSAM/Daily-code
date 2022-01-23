(() => {
//  定义一个类，类中的属性值的类型是不确定的，方法中的参数及返回值的类型也是不确定
//  定义一个泛型类
  class GenericNumber<T> {
    defaultValue: T
    add: (x: T, y: T) => T
  }

//  在实例化类的对象的时候，再确定泛型的类型
  const g1:GenericNumber<number> = new GenericNumber<number>()
//   设置属性值
  g1.defaultValue = 100
  g1.add = function (x, y) {
    return x + y
  }

  console.log(g1.add(10, 29))
  const g2:GenericNumber<string> = new GenericNumber<string>()
//   设置属性值
  g2.defaultValue = '100'
  g2.add = function (x, y) {
    return x + y
  }
  console.log(g2.add('ssam','aurpra'))


//  泛型约束

  // 定义一个接口，用于约束将来的某个类型中必要有length这个属性
  interface ILength{
  //  接口中有一个属性length
    length: number
  }
  function getLength<T extends ILength>(x: T):number {
    return x.length
  }

  console.log(getLength<string>('2222ss'))
})()
