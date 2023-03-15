// let str: string = 'hi'
// let num1: number = 123
// let num2: number = NaN
// let num3: number = Infinity
// let n: null = null
// let u: undefined = undefined
// // let v1: void = null
// let v2: void = undefined
// function myFn(): void {
//   return
// }

// console.log(str)
// console.log(num1, num2, num3)
// console.log(n, u)
// console.log(v2)

let a: unknown = 1
let b: number = 2
let c: unknown = { x: true, open: () => 124 }
c.open()

// unknown
// unknown类型只能赋值给自身或者any
// unknown方法或属性不能读取
// unknown比any更安全
