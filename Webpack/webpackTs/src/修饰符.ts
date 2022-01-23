// 修饰符(类中的成员的修饰符)：主要描述类中的成员（属性，构造函数，方法）的可访问性
// 类中的成员都有自己的默认的访问修饰符 public
// public修饰符，类中成员默认的修饰符，代表是公共的，任何位置都可以访问类中的成员
// private修饰符，类中成员如果使用private来修饰，那么外部是无法访问这个成员数据的，当然，子类中也是无法访问该成员数据的
// protected修饰符，类中成员如果是protected来修饰，那么外部是无法访问这个成员数据的，但是，子类中是可以访问该成员数据的
(() => {
// 定义一个类
  class Person {
    //  属性 public 修饰了属性成员
    // public name: string
    //  属性 private 修饰了属性成员
    // private name: string
    //  属性protected 修饰了属性成员
    protected name: string
    constructor(name:string) {
      this.name = name
    }
    public  eat() {
      console.log('hhhhhh', this.name)
    }
  }
  class Student extends Person{
    constructor(name:string) {
      super(name);
    }
    play() {
      console.log('oooooo', this.name)
    }
  }

//   实例化对象
  const per = new Person('sam')
  per.eat()
  // console.log(per.name)
  const stu = new Student('aurora')
  stu.play()
})()
