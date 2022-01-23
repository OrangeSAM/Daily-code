// 存取器：让我们可以有效地控制对象中的成员访问，通过getters和setters来进行操作

(() => {

  class Person {
    firstName: string
    lastName: string
    constructor(firstName:string, lastName:string) {
      this.firstName = firstName
      this.lastName = lastName
    }
    get fullName() {
      return this.firstName + '_' + this.lastName
    }
    set fullName(val) {
      let name = val.split('_')
      this.firstName = name[0]
      this.lastName = name[1]
    }
  }
  const person:Person = new Person('虹霖', '牟')
  console.log(person)
  console.log(person.fullName)

  person.fullName = 'aurora_ll'
  console.log(person.fullName)
})()
