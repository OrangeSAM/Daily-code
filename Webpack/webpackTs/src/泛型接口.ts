// 泛型接口 在定义接口时，为接口中的属性或方法定义泛型类型，
// 在使用接口时，再指定具体的泛型类型
(() => {
//  需求：定义一个类，用来存储用户的相关信息

//  定义一个泛型接口
  interface IBaseCrud<T> {
    data: Array<T>
    add: (t: T) => T
    getUserId: (id: number) => T
  }

//  定义一个用户信息的类
  class User {
    id?: number // 用户i ? 代表该属性可有可无
    name: string // 姓名
    age: number // 年龄
    constructor(name:string, age:number) {
      this.name = name
      this.age = age
    }
  }

// 定义一个类，可以针对用户的信息进行增加及查询的操作
  class UserCrud implements IBaseCrud<User> {
    data: Array<User> = []

    add(user: User): User {
      console.log(user, 22)
      user.id = Date.now() + Math.random()
      this.data.push(user)
      return user
    }

    getUserId(id: number):User {
      return this.data.find(user => user.id === id)
    }
  }
//  实例化添加用户信息的类
  const userCrud: UserCrud = new UserCrud()
  userCrud.add(new User('sam', 9))
  const {id} = userCrud.add(new User('aurora', 91))
  userCrud.add(new User('son', 3))
  console.log(userCrud)
 const user1 = userCrud.getUserId(id)
  console.log(user1)


})()
