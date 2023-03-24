// interface C {
//   age: number
// }
// class A {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class B extends A implements C {
//   age: number
//   constructor(name: string, age: number) {
//     super(name)
//     this.age = age
//   }
// }
// let b = new B('Tom', 18)
// console.log(b)

class A {
  static name1: string = 'A'
  static sayName1(): void {
    console.log(this.name1)
  }
}
class B extends A {}
B.name1
B.sayName1()
let a = new A()
a.name1()
