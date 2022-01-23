// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
//  定义一个函数，传入两个参数，第一参数是数据，第二个参数是数量，函数的作用，根据数量产生对应个数的数据，存放在一个数组中
  function getArr1(value: number, count: number): number[] {
//  根据数据和数量产生一个数组
    const arr: number[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }

  const arr1 = getArr1(199.22, 5)
  console.log(arr1)

  function getArr2(value: string, count: number): string[] {
//  根据数据和数量产生一个数组
    const arr: string[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }

  const arr2 = getArr2('aurora', 5)
  console.log(arr2)

  function getArr3(value: any, count: number): any[] {
//  根据数据和数量产生一个数组
    const arr: any[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }

  const arr3 = getArr3(6, 5)
  const arr4 = getArr3('aurora', 5)
  console.log(arr3[1].toFixed(2))
  console.log(arr4[0].split(' '))

  // 泛型的实现
  function getArr4<T>(value: T, count: number): T[] {
//  根据数据和数量产生一个数组
//     const arr: T[] = []
    const arr:Array<T> =[]
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr5 = getArr4<number>(8, 5)
  const arr6 = getArr4<string>('sam', 5)
  console.log(arr5)
  console.log(arr6[0].split(''))


//  函数中有多个泛型参数的函数

  function getMsg<k, v>(value: k, count: v):[k,v] {
    return [value, count]
  }
  const arr7 = getMsg<string, number>('2', 2)
  console.log(arr7[0].split(''))
  console.log(arr7[1].toFixed(2))

})()
