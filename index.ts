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

import { log } from 'console'

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
interface Person {
  firstName: string
  lastName: string
}
function greeter(person: Person): string {
  return `hello,${person.firstName}-${person.lastName}`
}
let user = { firstName: 'John', lastName: 'Tom' }
console.log(greeter(user))
