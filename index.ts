// // // let str: string = 'hi'
// // // let num1: number = 123
// // // let num2: number = NaN
// // // let num3: number = Infinity
// // // let n: null = null
// // // let u: undefined = undefined
// // // // let v1: void = null
// // // let v2: void = undefined
// // // function myFn(): void {
// // //   return
// // // }

// // // console.log(str)
// // // console.log(num1, num2, num3)
// // // console.log(n, u)
// // // console.log(v2)

// // let a: unknown = 1
// // let b: number = 2
// // let c: unknown = { x: true, open: () => 124 }
// // c.open()
// // let d = c
// // // unknown
// // // unknown类型只能赋值给自身或者any
// // // unknown方法或属性不能读取
// // // unknown比any更安全

// let body1 = document.querySelector('body')
// let body2 = document.querySelector('body')!
// let body3 = document.querySelector('body') as HTMLBodyElement
// body1?.background

// function add(a: number, b: number, c: number): void {
//   console.log(1)
// }
// 类型注解

// function greeter(person: string) {
//   return 'Hello, ' + person
// }
// let user = 'Jane User'
// console.log(greeter(user))

// 接口
// interface Person {
//   firstName: string
//   lastName: string
// }
// function greeter(person: Person): string {
//   return `hello,${person.firstName}-${person.lastName}`
// }
// let user = { firstName: 'John', lastName: 'Tom' }
// console.log(greeter(user))

// 类
// class Student {
//   fullName: string
//   constructor(public firstName: string, public lastName: string) {
//     this.fullName = firstName + lastName
//   }
// }
// interface Person {
//   firstName: string
//   lastName: string
// }
// function greeter(person: Person): string {
//   return `hello,${person.firstName} ${person.lastName}`
// }
// let user = new Student('张', '三')
// console.log(greeter(user))

// 基础类型
let a: string = '张三'
let b: number = 0
let c: boolean = false
let d: number[] = [1, 2, 3]
let e1: Array<string> = ['a', 'b', 'c']
let e2: [string, number, boolean] = ['王五', 20, true]
enum Color {
  Red,
  Green,
  Blue
}
let f: Color = Color.Blue
let g: unknown = 100
let h: any = 101
let i: any[] = ['fun', false, 1]
function fn(a: string): void {
  console.log(a)
}
// strictNullChecks: true
// undefined 还可以赋值给 void 类型
let j1: void = undefined
// let j2: void = null
console.log(a, b, c, d, e1, e2, f, g, h, i, j1)
// strictNullChecks: true
// null 和 undefined 不能赋值给 number 类型的变量
let abc: number
// abc = null
// abc = undefined
// null 和 undefined 只能赋值给 any 和它们各自的类型
let abcd: any
abcd = null
let abcde: void
abcde = undefined
// never 类型是那些总是会抛出异常
function check(message: string): never {
  throw new Error('Invalid')
}
// 推断的返回值类型为never
function fail() {
  // return error('somethings failed')
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// declare function create(o: object | null): void
// create({ prop: 1 })
// create(null)
// create(2)
// create('string')
// create(undefined)
// create(false)

// 断言
let value: any = 'abcdefghijklmnopqrst'
let strLength1: number = (<string>value).length
let strLength2: number = (value as string).length
console.log(strLength1, strLength2)

// 这些类型和我们以上推荐的小写版本的类型是一样的。
// 但这些类型不属于语言的基本类型，并且几乎在任何时候都不应该被用作一个类型

function show1(abc: String): String {
  return abc.split('').reverse().join('')
}
console.log(show1('abcdefghijklmnopqrst'))
function show2(abc: string): string {
  return abc.split('').reverse().join('')
}
console.log(show2('abcdefghijklmnopqrst'))
