// 多态 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为


(() => {
//  定义一个类
  class Animal{
    name: string
    constructor(name:string) {
      this.name = name
    }
    run(distance: number = 0) {
      console.log(`跑了${distance}米这么远的距离`, this.name)
    }
  }
//   定义一个子类
  class Dog extends Animal {
    constructor(name:string) {
      super(name);
    }
    run(distance: number = 5) {
      console.log(`跑了${distance}米这么远的距离`, this.name)
    }
  }
//  定义一个之类
  class Pig extends Animal {
    constructor(name:string) {
      super(name);
    }
    run(distance: number = 10) {
      console.log(`跑了${distance}米这么远的距离`, this.name)
    }
  }

//  实例化父类对象
  const ani:Animal = new  Animal('动物')
  ani.run()
  const dog:Dog = new Dog('大黄')
  dog.run()
  const pig:Dog = new Pig('佩奇')
  pig.run()

  console.log('----------------')
//  父类和之类的关系：父子关系
//  此时，父类类型创建子类的对象
  const dog1:Animal = new Dog('小黄')
  dog1.run()
  const pig1:Animal = new Pig('就嗲')
  pig1.run()
  console.log('----------------')
  function showRun(ani: Animal) {
    ani.run()
  }
  showRun(dog1)
  showRun(pig1)
})()
