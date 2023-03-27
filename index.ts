// // // // // let str: string = 'hi'
// // // // // let num1: number = 123
// // // // // let num2: number = NaN
// // // // // let num3: number = Infinity
// // // // // let n: null = null
// // // // // let u: undefined = undefined
// // // // // // let v1: void = null
// // // // // let v2: void = undefined
// // // // // function myFn(): void {
// // // // //   return
// // // // // }

import { userInfo } from 'os'

// // // // // console.log(str)
// // // // // console.log(num1, num2, num3)
// // // // // console.log(n, u)
// // // // // console.log(v2)

// // // // let a: unknown = 1
// // // // let b: number = 2
// // // // let c: unknown = { x: true, open: () => 124 }
// // // // c.open()
// // // // let d = c
// // // // // unknown
// // // // // unknown类型只能赋值给自身或者any
// // // // // unknown方法或属性不能读取
// // // // // unknown比any更安全

// // // let body1 = document.querySelector('body')
// // // let body2 = document.querySelector('body')!
// // // let body3 = document.querySelector('body') as HTMLBodyElement
// // // body1?.background

// // // function add(a: number, b: number, c: number): void {
// // //   console.log(1)
// // // }
// // // 类型注解

// // // function greeter(person: string) {
// // //   return 'Hello, ' + person
// // // }
// // // let user = 'Jane User'
// // // console.log(greeter(user))

// // // 接口
// // // interface Person {
// // //   firstName: string
// // //   lastName: string
// // // }
// // // function greeter(person: Person): string {
// // //   return `hello,${person.firstName}-${person.lastName}`
// // // }
// // // let user = { firstName: 'John', lastName: 'Tom' }
// // // console.log(greeter(user))

// // // 类
// // // class Student {
// // //   fullName: string
// // //   constructor(public firstName: string, public lastName: string) {
// // //     this.fullName = firstName + lastName
// // //   }
// // // }
// // // interface Person {
// // //   firstName: string
// // //   lastName: string
// // // }
// // // function greeter(person: Person): string {
// // //   return `hello,${person.firstName} ${person.lastName}`
// // // }
// // // let user = new Student('张', '三')
// // // console.log(greeter(user))

// // // 基础类型
// // let a: string = '张三'
// // let b: number = 0
// // let c: boolean = false
// // let d: number[] = [1, 2, 3]
// // let e1: Array<string> = ['a', 'b', 'c']
// // let e2: [string, number, boolean] = ['王五', 20, true]
// // enum Color {
// //   Red,
// //   Green,
// //   Blue
// // }
// // let f: Color = Color.Blue
// // let g: unknown = 100
// // let h: any = 101
// // let i: any[] = ['fun', false, 1]
// // function fn(a: string): void {
// //   console.log(a)
// // }
// // // strictNullChecks: true
// // // undefined 还可以赋值给 void 类型
// // let j1: void = undefined
// // // let j2: void = null
// // console.log(a, b, c, d, e1, e2, f, g, h, i, j1)
// // // strictNullChecks: true
// // // null 和 undefined 不能赋值给 number 类型的变量
// // let abc: number
// // // abc = null
// // // abc = undefined
// // // null 和 undefined 只能赋值给 any 和它们各自的类型
// // let abcd: any
// // abcd = null
// // let abcde: void
// // abcde = undefined
// // // never 类型是那些总是会抛出异常
// // function check(message: string): never {
// //   throw new Error('Invalid')
// // }
// // // 推断的返回值类型为never
// // function fail() {
// //   // return error('somethings failed')
// // }
// // // 返回never的函数必须存在无法达到的终点
// // function infiniteLoop(): never {
// //   while (true) {}
// // }

// // // declare function create(o: object | null): void
// // // create({ prop: 1 })
// // // create(null)
// // // create(2)
// // // create('string')
// // // create(undefined)
// // // create(false)

// // // 断言
// // let value: any = 'abcdefghijklmnopqrst'
// // let strLength1: number = (<string>value).length
// // let strLength2: number = (value as string).length
// // console.log(strLength1, strLength2)

// // // 这些类型和我们以上推荐的小写版本的类型是一样的。
// // // 但这些类型不属于语言的基本类型，并且几乎在任何时候都不应该被用作一个类型

// // function show1(abc: String): String {
// //   return abc.split('').reverse().join('')
// // }
// // console.log(show1('abcdefghijklmnopqrst'))
// // function show2(abc: string): string {
// //   return abc.split('').reverse().join('')
// // }
// // console.log(show2('abcdefghijklmnopqrst'))

// // // 接口
// // // function showMsg(myObj: { name: string }) {
// // //   console.log(myObj.name)
// // // }
// // // // 我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配
// // // let user = { name: 'Tom', age: 18, sex: 1, value: 3 }
// // // showMsg(user)

// // interface User {
// //   name: string
// // }
// // function showName(myObj: User) {
// //   return myObj.name
// // }
// // let myObj = { name: 'Tom', age: 18, sex: 1, value: 100 }
// // showName(myObj)

// // // 可选属性
// // interface SquareConfig {
// //   color?: string
// //   width?: number
// // }
// // function createSquare(config: SquareConfig): { color: string; area: number } {
// //   let newSquare = { color: 'green', area: 100 }
// //   if (config.color) {
// //     newSquare.color = config.color
// //   }
// //   if (config.width) {
// //     newSquare.area = config.width * config.width
// //   }
// //   return newSquare
// // }
// // createSquare({ color: 'green' })

// // // 只读属性
// // interface Point {
// //   readonly x: number
// //   readonly y: number
// // }
// // let p1: Point = { x: 1, y: 2 }
// // console.log(p1.x)
// // let arr1: number[] = [1, 2, 3]
// // let arr2: Array<number> = [4, 5, 6]
// // console.log(arr1)
// // console.log(arr2)
// // let arr3: ReadonlyArray<number> = arr1
// // // arr3[1] =3
// // // 可以用类型断言重写
// // arr1 = arr3 as Array<number>

// // // readonly vs const

// // //  索引签名
// // // SquareConfig 带有上面定义的类型的 color 和 width 属性，并且_还会_带有任意数量的其它属性
// // interface SquareConfigs {
// //   color: string
// //   width: number
// //   [propName: string]: any
// // }

// // // 函数类型/
// // interface searchFunc {
// //   (source: string, subString: string): boolean
// // }
// // let mySearch: searchFunc
// // mySearch = (a: string, b: string) => {
// //   let result = a.search(b)
// //   return result > -1
// // }

// // // 可索引的类型
// // interface stringArray {
// //   [index: number]: string
// // }
// // let myArr: stringArray
// // myArr = ['张三', '李四']
// // let a2 = myArr[0]
// // console.log(a)

// // // 字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
// // interface myObj1 {
// //   [key: string]: string
// // }
// // let newObj1: myObj1 = {
// //   name: 'Tom',
// //   age: '20',
// //   sex: 'man'
// // }
// // interface myObj2 {
// //   [key: number]: string
// // }
// // let newObj2: myObj2 = ['Tom', '20', 'man']

// // console.log(newObj1.name)
// // console.log(newObj2[0])

// // // class Animal {
// // //   name: string
// // // }
// // // class Dog extends Animal {
// // //   breed: string
// // // }

// // // // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// // // interface NotOkay {
// // //   [x: number]: Animal
// // //   [x: string]: Dog
// // // }
// // interface NumberDictionary {
// //   [index: string]: number
// //   length: number
// //   //name: string //
// // }
// // interface NumberOrStringDictionary {
// //   readonly [index: string]: number | string
// // }
// // let myO: NumberOrStringDictionary = { name: 'Alice', age: 20 }
// // //myO.name = 'Bob' //类型“NumberOrStringDictionary”中的索引签名仅允许读取。ts(2542)

// // // 类类型
// // interface clockInterface {
// //   currentTime: Date
// //   setTime(d: Date): void
// // }
// // class Clock implements clockInterface {
// //   currentTime: Date = new Date()
// //   setTime(d: Date): void {
// //     this.currentTime = d
// //   }
// //   constructor(h: number, m: number) {}
// // }

// // //类静态部分与实例部分的区别
// // // interface ClockConstructor {
// // //   currentTime: Date
// // //   new (hour: number, minute: number)
// // // }

// // // class Clock implements ClockConstructor {
// // //   currentTime = new Date()
// // //   constructor(h: number, m: number) {}
// // // }
// // interface ClockConstructor {
// //   new (h: number, m: number): ClockInterface
// // }
// // interface ClockInterface {
// //   tick(): void
// // }
// // function createClock(
// //   ctor: ClockConstructor,
// //   h: number,
// //   m: number
// // ): ClockInterface {
// //   return new ctor(h, m)
// // }
// // class DigitalClock implements ClockInterface {
// //   constructor(h: number, m: number) {}
// //   tick(): void {
// //     console.log('beep beep')
// //   }
// // }
// // class AnalogClock implements ClockInterface {
// //   constructor(h: number, m: number) {}
// //   tick(): void {
// //     console.log('tick tick')
// //   }
// // }
// // let digital = createClock(DigitalClock, 12, 17)
// // let analog = createClock(AnalogClock, 7, 32)

// // // 继承接口
// // interface Shape {
// //   color: string
// // }
// // interface Square extends Shape {
// //   width: number
// // }
// // // let square: Square = { color: 'blue', width: 100 }
// // let square = {} as Square
// // square.color = 'blue'
// // square.width = 100
// // // 一个接口可以继承多个接口，创建出多个接口的合成接口
// // interface A {
// //   sex: string
// // }
// // interface B {
// //   age: number
// // }
// // interface Person extends A, B {
// //   name: string
// // }
// // let p11: Person = { name: 'John', age: 18, sex: 'female' }
// // let p12 = {} as Person
// // p12.name = 'John1'
// // p12.age = 19
// // p12.sex = 'male'

// // // 混合类型
// // interface Counter {
// //   (start: number): string
// //   interval: number
// //   reset(): void
// // }
// // function getCounter(): Counter {
// //   let counter = function (start: number) {} as Counter
// //   counter.interval = 123
// //   counter.reset = function () {}
// //   return counter
// // }
// // let x1 = getCounter()
// // console.log(x1(1))
// // console.log(x1.reset())
// // console.log((x1.interval = 124))

// // class Control {
// //   private state: any
// // }
// // interface SelectableControl extends Control {
// //   select(): void
// // }
// // class Button extends Control implements SelectableControl {
// //   select() {}
// // }
// // class TextBox extends Control {
// //   select() {}
// // }
// // // class ImageControl implements SelectableControl {
// // //   // Error: Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
// // //   //  Types have separate declarations of a private property 'state'.
// // //   private state: any
// // //   select(): void {}
// // // }
// // // 在上面的例子里， SelectableControl 包含了 Control 的所有成员，包括私有成员 state 。
// // // 因为 state 是私有成员，所以只能够是 Control 的子类们才能实现 SelectableControl 接口。
// // // 因为只有 Control 的子类才能够拥有一个声明于 Control 的私有成员 state ，这对私有成员的兼容性是必需的。

// // // 在 Control 类内部，是允许通过 SelectableControl 的实例来访问私有成员 state 的。
// // // 实际上， SelectableControl 就像 Control 一样，并拥有一个 select 方法。
// // //  Button 和 TextBox 类是 SelectableControl 的子类（因为它们都继承自 Control 并有 select 方法）。
// // //  而对于 ImageControl 类，它有自身的私有成员 state 而不是通过继承 Control 得来的，所以它不可以实现 SelectableControl 。

// // //函数类型

// // function add(x: number, y: number): number {
// //   return x + y
// // }

// // function fullName(firstName: string, lastName?: string): string {
// //   if (lastName) {
// //     return firstName + lastName
// //   } else {
// //     return firstName
// //   }
// // }
// // let result1 = fullName('Bob')
// // let result2 = fullName('Bob', 'Adams')
// // console.log(result1)
// // console.log(result2)
// // // 把 last name 的默认值设置为 "Smith"

// // function buildName(firstName: string, lastName = 'Smith') {
// //   return firstName + lastName
// // }
// // let res1 = buildName('Bob')
// // let res2 = buildName('Bob', undefined)
// // let res3 = buildName('Bob', 'Adams')

// // console.log('####', res1)
// // console.log(res2)
// // console.log(res3)

// // function buildName1(firstName = 'Will', lastName: string) {
// //   return firstName + lastName
// // }
// // // let re1 = buildName1('Bob') // error, too few parameters
// // // let re2 = buildName1('Bob', 'Adams', 'Sr.') // error, too many parameters
// // let re3 = buildName1('Bob', 'Adams') // okay and returns "Bob Adams"
// // let re4 = buildName1(undefined, 'Adams')
// // console.log(re3, re4)

// // // 剩余参数
// // function personInfo(name: string, ...otherProps: string[]) {
// //   return name + otherProps.join('')
// // }
// // let employee = personInfo('张三', '男', '20')
// // console.log(employee)

// // // let deck = {
// // //   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
// // //   cards: Array(52),
// // //   createCardPicker: function () {
// // //     return () => {
// // //       let pickedCard = Math.floor(Math.random() * 52)
// // //       let pickedSuit = Math.floor(pickedCard / 13)

// // //       return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
// // //     }
// // //   }
// // // }

// // // let cardPicker = deck.createCardPicker()
// // // let pickedCard = cardPicker()

// // // this 参数
// // function f1(this: void) {}

// // interface Card {
// //   suit: string
// //   card: number
// // }
// // interface Deck {
// //   suits: string[]
// //   cards: number[]
// //   createCardPicker(this: Deck): () => Card
// // }
// // let deck: Deck = {
// //   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
// //   cards: Array(52),
// //   // NOTE: The function now explicitly specifies that its callee must be of type Deck
// //   createCardPicker: function (this: Deck) {
// //     return () => {
// //       let pickedCard = Math.floor(Math.random() * 52)
// //       let pickedSuit = Math.floor(pickedCard / 13)

// //       return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
// //     }
// //   }
// // }
// // let cardPicker = deck.createCardPicker()
// // let pickedCard = cardPicker()
// // console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

// // interface UIElement {
// //   addClickListener(onclick: (this: void, e: Event) => void): void
// // }

// // // 重载
// // // let suits = ['hearts', 'spades', 'clubs', 'diamonds']
// // // function pickCard(x: any): any {
// // //   // Check to see if we're working with an object/array
// // //   // if so, they gave us the deck and we'll pick the card
// // //   if (typeof x == 'object') {
// // //     let pickedCard = Math.floor(Math.random() * x.length)
// // //     return pickedCard
// // //   }
// // //   // Otherwise just let them pick the card
// // //   else if (typeof x == 'number') {
// // //     let pickedSuit = Math.floor(x / 13)
// // //     return { suit: suits[pickedSuit], card: x % 13 }
// // //   }
// // // }

// // let suits = ['hearts', 'spades', 'clubs', 'diamonds']

// // function pickCard(x: { suit: string; card: number }[]): number
// // function pickCard(x: number): { suit: string; card: number }
// // function pickCard(x: any): any {
// //   // Check to see if we're working with an object/array
// //   // if so, they gave us the deck and we'll pick the card
// //   if (typeof x == 'object') {
// //     let pickedCard = Math.floor(Math.random() * x.length)
// //     return pickedCard
// //   }
// //   // Otherwise just let them pick the card
// //   else if (typeof x == 'number') {
// //     let pickedSuit = Math.floor(x / 13)
// //     return { suit: suits[pickedSuit], card: x % 13 }
// //   }
// // }

// // let myDeck = [
// //   { suit: 'diamonds', card: 2 },
// //   { suit: 'spades', card: 10 },
// //   { suit: 'hearts', card: 4 }
// // ]
// // let pickedCard1 = myDeck[pickCard(myDeck)]
// // alert('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

// // let pickedCard2 = pickCard(15)
// // alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)

// // // 字面量类型
// // type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
// // class UIElement {
// //   animate(dx: number, dy: number, easing: Easing) {
// //     if (easing === 'ease-in') {
// //       // ...
// //     } else if (easing === 'ease-out') {
// //     } else if (easing === 'ease-in-out') {
// //     } else {
// //       // It's possible that someone could reach this
// //       // by ignoring your types though.
// //     }
// //   }
// // }

// // let button = new UIElement()
// // button.animate(0, 0, 'ease-in')
// // button.animate(0, 0, 'uneasy')

// // function createElement(tagName: 'div'): HTMLDivElement
// // function createElement(tagName: 'span'): HTMLSpanElement
// // function createElement(tagName: string): HTMLElement {}

// // // 数字字面量类型
// // function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 {
// //   return Math.floor(Math.random() * 10) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// // }

// // const result = rollDice()

// // interface MapConfig {
// //   lng: number
// //   lat: number
// //   tileSize: 8 | 16 | 32
// // }

// // setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 })

// // interface Success {
// //   isValid: true
// //   reason: null
// // }

// // interface Fail {
// //   isValid: false
// //   reason: string
// // }

// // type ValidationResult = Success | Fail
// // // 联合类型
// // /**
// //  * Takes a string and adds "padding" to the left.
// //  * If 'padding' is a string, then 'padding' is appended to the left side.
// //  * If 'padding' is a number, then that number of spaces is added to the left side.
// //  */
// // function padLeft(value: string, padding: any) {
// //   if (typeof padding === 'number') {
// //     return Array(padding + 1).join(' ') + value
// //   }
// //   if (typeof padding === 'string') {
// //     return padding + value
// //   }
// //   throw new Error(`Expected string or number, got '${typeof padding}'.`)
// // }

// // padLeft('Hello world', 4) // returns "    Hello world"

// // function padLeft1(value: string, padding: number | string) {}
// // let indentedString = padLeft1('hello world', true)

// // // 具有公共字段的联合
// // // @errors: 2339

// // interface Bird {
// //   fly(): void
// //   layEggs(): void
// // }

// // interface Fish {
// //   swim(): void
// //   layEggs(): void
// // }

// // declare function getSmallPet(): Fish | Bird

// // let pet = getSmallPet()
// // pet.layEggs()

// // // 只有两种可能类型中的一种可用
// // pet.swim()

// // // 可区分联合
// // type NetworkLoadingState = {
// //   state: 'loading'
// // }

// // type NetworkFailedState = {
// //   state: 'failed'
// //   code: number
// // }

// // type NetworkSuccessState = {
// //   state: 'success'
// //   response: {
// //     title: string
// //     duration: number
// //     summary: string
// //   }
// // }

// // // 创建一个只代表上述类型之一的类型，但你还不确定它是哪个。
// // type NetworkState =
// //   | NetworkLoadingState
// //   | NetworkFailedState
// //   | NetworkSuccessState

// // // 联合的穷尽性检查

// // // 交叉类型
// // interface ErrorHandling {
// //   success: boolean
// //   error?: { message: string }
// // }

// // interface ArtworksData {
// //   artworks: { title: string }[]
// // }

// // interface ArtistsData {
// //   artists: { name: string }[]
// // }

// // // 这些接口被组合后拥有一致的错误处理，和它们自己的数据

// // type ArtworksResponse = ArtworksData & ErrorHandling
// // type ArtistsResponse = ArtistsData & ErrorHandling

// // const handleArtistsResponse = (response: ArtistsResponse) => {
// //   if (response.error) {
// //     console.error(response.error.message)
// //     return
// //   }

// //   console.log(response.artists)
// // }

// // 类

// class Greeter {
//   greeting: string
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return 'Hello, ' + this.greeting
//   }
// }

// let greeter = new Greeter('world')

// // console.log(greeter.greet())
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m`)
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log('wang')
//   }
// }
// const dog = new Dog()
// // console.log(dog.bark())
// // console.log(dog.move(10))

// class Animal1 {
//   name: string
//   constructor(theName: string) {
//     this.name = theName
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m`)
//   }
// }
// class Snake extends Animal1 {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distanceInMeters = 5) {
//     console.log('Slithering...')
//     super.move(distanceInMeters)
//   }
// }
// class Horse extends Animal1 {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distanceInMeters = 45) {
//     console.log('Galloping...')
//     super.move(distanceInMeters)
//   }
// }
// let sam = new Snake('Sammy the Python')
// let tom: Animal1 = new Horse('Tommy the Palomino')

// // sam.move(1)
// // tom.move(2)

// // 公共，私有与受保护的修饰符
// // 默认为 public
// class Animal2 {
//   public name: string
//   public constructor(theName: string) {
//     this.name = theName
//   }
//   public move(distanceInMeters: number) {
//     console.log(`${this.name} moved  ${distanceInMeters}`)
//   }
// }
// // private
// class Animal3 {
//   private name: string
//   constructor(theName: string) {
//     this.name = theName
//   }
// }

// let an = new Animal3('cat')
// // an.name

// class Person {
//   protected name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// class Employee extends Person {
//   private department: string

//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`
//   }
// }

// let howard = new Employee('Howard', 'Sales')
// // console.log(howard.getElevatorPitch())
// // console.log(howard.name) // 错误

// // readonly 修饰符

// class Octopus {
//   readonly name: string
//   readonly numberOfLegs: number = 8
//   constructor(theName: string) {
//     this.name = theName
//   }
// }
// let dad = new Octopus('Man with the 8 strong legs')
// // console.log(dad)
// // dad.name = 'Man with the 3-piece suit'

// // 参数属性

// class Animal4 {
//   constructor(private name: string) {}
//   move(distanceInMeters: number) {
//     console.log(`${this.name} moved to ${distanceInMeters}`)
//   }
// }

// // 存取器

// // class Employee1 {
// //   fullName: string
// // }
// // let employee = new Employee1()
// // employee.fullName = 'Tom Smith'
// // if (employee.fullName) {
// //   console.log(employee.fullName)
// // }

// const fullNameMaxLength = 10
// // class Employee3 {
// //   // private _fullName: string
// //   get fullName(): string {
// //     return this._fullName
// //   }
// //   set fullName(newName: string) {
// //     if (newName && newName.length > fullNameMaxLength) {
// //       throw new Error('fullName has a max length of ' + fullNameMaxLength)
// //     }
// //     this._fullName = newName
// //   }
// // }

// // let employee = new Employee3()
// // employee.fullName = 'Tom Smith'
// // if (employee.fullName) {
// //   // console.log(employee.fullName)
// // }

// // 静态属性

// // class Dog3 {
// //   static myStaticProperty: string = 'Hello' // 定义静态属性
// //   static myStaticMethod() {
// //     // 定义静态方法
// //     console.log('World')
// //   }
// // }
// // console.log(Dog3.myStaticProperty)
// // Dog3.myStaticMethod()

// // class dog1 extends Dog3 {
// //   move() {
// //     console.log(1)
// //   }
// // }

// // console.log(dog1.myStaticProperty)
// // dog1.myStaticMethod()
// // // const myClassInstance = new MyClass();
// // // console.log(myClassInstance.myStaticMethod);
// // let dog9 = new Dog3()
// // // console.log(dog9.myStaticProperty)
// // // console.log(dog9.myStaticMethod())

// // let dog10 = new dog1()
// // console.log(dog10.move())

// class MyClass1 {
//   static myStaticProperty = 'Hello' // 定义静态属性
//   static myStaticMethod() {
//     // 定义静态方法
//     console.log('World')
//   }
// }
// class MyClass2 extends MyClass1 {
//   static myStaticProperty = 'Hello'
//   static myStaticMethod() {
//     console.log(2)
//   }
// }
// // console.log(MyClass2.myStaticProperty)
// // MyClass2.myStaticMethod()

// // 抽象类

// // abstract class MyClass10 {
// //   abstract makeSound(): void
// //   move(): void {
// //     // console.log(`roaming the earth`)
// //   }
// // }

// abstract class Department {
//   constructor(public name: string) {}
//   printName(): void {
//     console.log(`department name : ${this.name}`)
//   }
//   abstract printMeeting(): void
// }

// class userDepartment extends Department {
//   constructor() {
//     super(`userDepartment`)
//   }
//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.')
//   }
//   generateReport(): void {
//     console.log('Generating accounting reports...')
//   }
// }

// let department: Department // 允许创建一个对抽象类型的引用
// // department = new Department()  错误: 不能创建一个抽象类的实例
// department = new userDepartment() // 允许对一个抽象子类进行实例化和赋值
// // department.printName()
// // department.printMeeting()
// // department.generateReports()  错误: 方法在声明的抽象类中不存在

// // 构造函数

// class Greeter1 {
//   greeting: string
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return 'hello' + this.greeting
//   }
// }
// let greeter1: Greeter1
// greeter1 = new Greeter1('world')
// // console.log(greeter1.greet())

// // 枚举

// enum Direction {
//   Up = 1,
//   Down = 3,
//   Left = 5,
//   Right
// }
// // console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right)

// enum Response1 {
//   No = 10,
//   Yes = 11
// }
// function response(recipient: string, message: Response1) {
//   return recipient + message
// }
// let result = response('Princess Caroline', Response1.Yes)
// // console.log(result)

// enum E {
//   A = 'getSomeValue'
//   // B //枚举成员必须具有初始化表达式
// }
// // 字符串枚举

// enum Direction1 {
//   Up = 'up',
//   Down = 'down',
//   Left = 'left',
//   Right = 'right'
// }
// // 异构枚举

// enum BooleanLikeHeterogeneousEnum {
//   No = 1,
//   Yes = 'YES'
// }

// // 计算的和常量成
// // All enum members in 'E1' and 'E2' are constant.

// enum E1 {
//   X,
//   Y,
//   Z
// }

// enum E2 {
//   A = 1,
//   B,
//   C
// }
// enum FileAccess {
//   // constant members
//   None,
//   Read = 1 << 1,
//   Write = 1 << 2,
//   ReadWrite = Read | Write,
//   // computed member
//   G = '123'.length
// }

// // 联合枚举与枚举成员的类型
// enum ShapeKind {
//   Circle,
//   Square
// }

// interface Circle {
//   kind: ShapeKind.Circle
//   radius: number
// }

// interface Square {
//   kind: ShapeKind.Square
//   sideLength: number
// }

// // let c: Circle = {
// //   //kind: ShapeKind.Square, // Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
// //   radius: 100
// // }

// enum E {
//   Foo,
//   Bar
// }

// function f(x: E) {
//   // if (x !== E.Foo || x !== E.Bar) {
//   //   //             ~~~~~~~~~~~
//   //   // Error! This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
//   // }
// }
// declare enum Enum {
//   A = 1,
//   B,
//   C = 2
// }

// // 泛型

// function loggingIdentity1<T>(arg: T): T {
//   //console.log(arg.length) // Error: T doesn't have .length
//   return arg
// }
// function loggingIdentity2<T>(arg: T[]): T[] {
//   console.log(arg.length) // Array has a .length, so no more error
//   return arg
// }
// function loggingIdentity3<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length) // Array has a .length, so no more error
//   return arg
// }

// function identity1<T>(arg: T): T {
//   return arg
// }

// let myIdentity1: <T>(arg: T) => T = identity1

// function identity2<T>(arg: T): T {
//   return arg
// }

// let myIdentity2: <U>(arg: U) => U = identity2

// function identity<T>(arg: T): T {
//   return arg
// }

// let myIdentity: { <T>(arg: T): T } = identity

// interface GenericIdentityFn {
//   <T>(arg: T): T
// }
// function identity3<T>(arg: T): T {
//   return arg
// }
// let myIdentity3: GenericIdentityFn = identity3

// // // 泛型类
// // class GenericNumber<T> {
// //   zeroValue: T
// //   add: (x: T, y: T) => T
// // }

// // let myGenericNumber = new GenericNumber<number>()
// // myGenericNumber.zeroValue = 0
// // myGenericNumber.add = function (x, y) {
// //   return x + y
// // }

// // 反省约束
// interface lengthWise {
//   length: number
// }
// function loggingIdentity11<T extends lengthWise>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }
// // 在泛型约束中使用类型参数
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }
// let x = { a: 1, b: 2, c: 3, d: 4 }
// getProperty(x, 'a')
// // getProperty(x, 'e')

// function create<T>(c: { new (): T }): T {
//   return new c()
// }
// class BeeKeeper {
//   hasMask: boolean
// }

// class ZooKeeper {
//   nametag: string
// }

// class Animal33 {
//   numLegs: number
// }

// class Bee extends Animal33 {
//   keeper: BeeKeeper
// }

// class Lion extends Animal33 {
//   keeper: ZooKeeper
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c()
// }

// createInstance(Lion).keeper.nametag // typechecks!
// createInstance(Bee).keeper.hasMask // typechecks!

// // 高级类型
// // 交叉类型 交叉类型是将多个类型合并为一个类型
// function extend<First, Second>(first: First, second: Second): First & Second {
//   const result: Partial<First & Second> = {}
//   for (const prop in first) {
//     if (first.hasOwnProperty(prop)) {
//       ;(result as First)[prop] = first[prop]
//     }
//   }
//   for (const prop in second) {
//     if (second.hasOwnProperty(prop)) {
//       ;(result as Second)[prop] = second[prop]
//     }
//   }
//   return result as First & Second
// }

// class Person {
//   constructor(public name: string) {}
// }

// interface Loggable {
//   log(name: string): void
// }

// class ConsoleLogger implements Loggable {
//   log(name) {
//     console.log(`Hello, I'm ${name}.`)
//   }
// }

// const jim = extend(new Person('Jim'), ConsoleLogger.prototype)
// jim.log(jim.name)

// // 联合类型
// // 表示一个值可以是几种类型之一。 我们用竖线（ | ）分隔每个类型
// function padLeft(value: string, padding: string | number) {
//   // ...
// }
// let indentedString = padLeft('Hello world', 2) // errors during compilation

// // 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
// interface Bird {
//   fly()
//   layEggs()
// }

// interface Fish {
//   swim()
//   layEggs()
// }

// function getSmallPet(): Fish | Bird {
//   // ...
// }
// let pet = getSmallPet()
// pet.layEggs() // okay
// pet.swim() // errors

// // 类型守卫与类型区分
// // 用户自定义的类型守卫
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined
// }

// function padLeft1(value: string, padding: string | number) {
//   if (typeof padding === 'number') {
//     return Array(padding + 1).join(' ') + value
//   }
//   if (typeof padding === 'string') {
//     return padding + value
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`)
// }

// // 类型别名
// type Name = string
// type NameResolver = () => string
// type NameOrResolver = Name | NameResolver
// function getName(n: NameOrResolver): Name {
//   if (typeof n === 'string') {
//     return n
//   } else {
//     return n()
//   }
// }

// type Alias = { num: number }
// interface Interface {
//   num: number
// }
// declare function aliased(arg: Alias): Alias
// declare function interfaced(arg: Interface): Interface

// // 字符串字面量类型
// type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
// class UIElement {
//   animate(dx: number, dy: number, easing: Easing) {
//     if (easing === 'ease-in') {
//       // ...
//     } else if (easing === 'ease-out') {
//     } else if (easing === 'ease-in-out') {
//     } else {
//       // error! should not pass null or undefined.
//     }
//   }
// }

// let button = new UIElement()
// button.animate(0, 0, 'ease-in')
// button.animate(0, 0, 'uneasy') // error: "uneasy" is not allowed here

// // 字符串字面量类型还可以用于区分函数重载
// function createElement(tagName: 'input'): HTMLInputElement
// function createElement(tagName: 'img'): HTMLImageElement
// function createElement(tagName: string): Element {}

// // 数字字面量类型
// function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
//   // ...
// }
// function foo(x: number) {
//   if (x !== 1 || x !== 2) {
//     //         ~~~~~~~
//     // Operator '!==' cannot be applied to types '1' and '2'.
//   }
// }

// // 可辨识联合
// interface Square {
//   kind: 'square'
//   size: number
// }
// interface Rectangle {
//   kind: 'rectangle'
//   width: number
//   height: number
// }
// interface Circle {
//   kind: 'circle'
//   radius: number
// }
// type Shape = Square | Rectangle | Circle

// function area(s: Shape) {
//   switch (s.kind) {
//     case 'square':
//       return s.size * s.size
//     case 'rectangle':
//       return s.height * s.width
//     case 'circle':
//       return Math.PI * s.radius ** 2
//   }
// }

// //完整性检查

// // 多态的 this 类型
// class BasicCalculator {
//   public constructor(protected value: number = 0) {}
//   public currentValue(): number {
//     return this.value
//   }
//   public add(operand: number): this {
//     this.value += operand
//     return this
//   }
//   public multiply(operand: number): this {
//     this.value *= operand
//     return this
//   }
//   // ... other operations go here ...
// }

// let v = new BasicCalculator(2).multiply(5).add(1).currentValue()

// // 索引类型
// function pluck(o, propertyNames) {
//   return propertyNames.map(n => o[n])
// }
// function pluck1<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
//   return propertyNames.map(n => o[n])
// }

// interface Car {
//   manufacturer: string
//   model: string
//   year: number
// }
// let taxi: Car = {
//   manufacturer: 'Toyota',
//   model: 'Camry',
//   year: 2014
// }

// // Manufacturer and model are both of type string,
// // so we can pluck them both into a typed string array
// let makeAndModel: string[] = pluck1(taxi, ['manufacturer', 'model'])

// // If we try to pluck model and year, we get an
// // array of a union type: (string | number)[]
// let modelYear = pluck1(taxi, ['model', 'year'])

// declare function f3<T extends boolean>(x: T): T extends true ? string : number

// // Type is 'string | number
// let x3 = f3(Math.random() < 0.5)

// type TypeName<T> = T extends string
//   ? 'string'
//   : T extends number
//   ? 'number'
//   : T extends boolean
//   ? 'boolean'
//   : T extends undefined
//   ? 'undefined'
//   : T extends Function
//   ? 'function'
//   : 'object'

// type T0 = TypeName<string> // "string"
// type T1 = TypeName<'a'> // "string"
// type T2 = TypeName<true> // "boolean"
// type T3 = TypeName<() => void> // "function"
// type T4 = TypeName<string[]> // "object"

// interface Foo {
//   propA: boolean
//   propB: boolean
// }

// declare function f<T>(x: T): T extends Foo ? string : number

// function foo3<U>(x: U) {
//   // Has type 'U extends Foo ? string : number'
//   let a = f(x)

//   // This assignment is allowed though!
//   let b: string | number = a
// }
// function fn<T>(arg: T): T {
//   return arg
// }

// fn(10)

// class A {
//   static sex: string = 'male'
// }
// class B extends A {}
// A.sex
// B.sex
// const instance = new A()
// instance.sex = 'male'
// const instance2 = new B()
// instance2.sex = 'male'
// class A {
//   _sex: string
//   constructor(sex: string) {
//     this._sex = sex
//   }

//   public get sex(): string {
//     return this.sex
//   }
//   public set sex(sex: string) {
//     this._sex = sex
//   }
// }
// let a = new A('Aa')
// console.log(a._sex)
// a._sex = 'Bb'
// console.log(a._sex)
// interface User {
//   name: string
//   age: number
//   info(): void
// }
// let a: User = {
//   name: 'Jane',
//   age: 10,
//   info() {
//     return `${this.name}今年${this.age}岁嘞`
//   }
// }
// console.log(a.info())

// interface Start {
//   start(): void
// }
// interface End {
//   end(): void
// }
// class A {
//   info: string
//   constructor(info: string) {
//     this.info = info
//   }
//   show() {
//     return this.info
//   }
// }
// class B extends A implements Start, End {
//   start(): void {
//     return console.log('start')
//   }
//   end() {
//     return console.log('end')
//   }
// // }

// interface UserInfo {
//   name: string
//   age: number
//   sex: TypeSex
// }
// enum TypeSex {
//   male = 'male',
//   female = 'female'
// }
// let p1: UserInfo = { name: 'John1', age: 18, sex: TypeSex.male }
// let p2: UserInfo = { name: 'John2', age: 19, sex: TypeSex.female }
// let p: UserInfo[] = [p1, p2]
// console.log(p1)
// console.log(p2)
// console.log(p)

// interface PayInterface {
//   handle(price: number): void
// }
// class AliPay implements PayInterface {
//   handle(price: number): void {
//     console.log(`支付宝付款${price}`)
//   }
// }
// class WePay implements PayInterface {
//   handle(price: number): void {
//     console.log(`微信付款${price}`)
// //   }
// // }

// interface Member {
//   name: string
// }
// interface User extends Member {
//   age: number
// }
// class Person implements User {
//   name: string = 'John'
//   age: number = 11
// }
// let p1 = new Person()
// console.log(p1)

// type Person = {
//   name: string
//   age: number
// }
// class Student implements Student {
//   name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }
// let s1 = new Student('Tommy', 10)
// console.log(s1)

// type Name = {
//   name: string
// }
// type Age = {
//   age: number
// }
// type User = Name & Age
// let s2: User = {
//   name: 'Jane',
//   age: 13
// }
// console.log(s2)

// type User = {
//   name: string
// }
// type Member = {
//   age: number
// }

// type Person = User & Member
// // interface Person extends User, Member {
// //   sex: string
// // }

// class Student implements Person {
//   name: string
//   age: number
//   sex: string
//   constructor(name: string, age: number, sex: string) {
//     this.name = name
//     this.age = age
//     this.sex = sex
//   }
// }
// let s3 = new Student('Tommy', 10, 'female')
// console.log(s3)

// function moveDecorator(target: Function) {
//   target.prototype.name = 'Tony'
//   target.prototype.age = 18
//   target.prototype.showInfo = (): void => {
//     console.log(`moveDecorator~~~~~~~`)
//   }
// }

// @moveDecorator
// class Tank {}
// @moveDecorator
// class Player {}
// let t = new Tank()
// let p = new Player()
// console.log((t as any).name)
// console.log((p as any).age)
// console.log((p as any).showInfo())

// function moveDecorator(target: Function) {
//   target.prototype.move = () => {
//     console.log('move')
//   }
// }
// function eatDecorator(target: Function) {
//   target.prototype.eat = () => {
//     console.log('eat')
//   }
// }
// @eatDecorator
// @moveDecorator
// class Person {}
// let p = new Person()
// console.log((<any>p).eat())
// console.log((<any>p).move())

// function MessageDecorator<ClassDecorator>(target: Function) {
//   target.prototype.message = (context: string) => {
//     console.log(context)
//   }
// }
// @MessageDecorator
// class Login {
//   message(context: string) {}
//   login() {
//     this.message('login successfully')
//   }
// }
// @MessageDecorator
// class Comment {
//   message(context: string) {}
//   comment() {
//     this.message('comment successfully')
//   }
// }
// let l = new Login()
// let c = new Comment()
// l.login()
// c.comment()

// const MusicDecoratorFactory = (type: string): ClassDecorator => {
//   switch (type) {
//     case 'hello A':
//       return (target: Function) => {
//         target.prototype.play = (): void => {
//           console.log(type)
//         }
//       }
//     default:
//       return (target: Function) => {
//         target.prototype.play = (): void => {
//           console.log(type)
//         }
//       }
//   }
// }
// @MusicDecoratorFactory('hello A')
// class Net {
//   play() {}
// }
// new Net().play()
// @MusicDecoratorFactory('hello B')
// class Net1 {
//   play() {}
// }
// new Net1().play()

// const showDecorator: MethodDecorator = (...args: any[]) => {
//   console.log(args)
// }
// class User {
//   @showDecorator
//   show() {}
// }

// const highLightDecorator: MethodDecorator = (
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) => {
//   target.
// }
// class User {
// @highLightDecorator()
//   public show() {
//     console.log('show!')
//   }
// }
// new User().show()
// const SleepDecorator =
//   (timer: number): MethodDecorator =>
//   (...args: any[]) => {
//     const [, , descriptor] = args
//     const method = descriptor.value
//     descriptor.value = () => {
//       setTimeout(() => {
//         method()
//       }, timer)
//     }
//   }

// class User {
//   @SleepDecorator(2000)
//   show() {
//     console.log('hello')
//   }
// }
// // new User().show()
// const ErrorDecorator: MethodDecorator = (
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) => {
//   const method = descriptor.value
//   descriptor.value = () => {
//     try {
//       method()
//     } catch (error: any) {
//       console.log('ERROR')
//     }
//   }
// }
// class Error1 {
//   @ErrorDecorator
//   showError() {
//     throw new Error('error!!!')
//   }
// }
// new Error1().showError()
const type = {
  name: 'AA',
  isLogin: false
}
const AccessDecorator: MethodDecorator = (...args: any[]) => {
  const [, , descriptor] = args
  const method = descriptor.value
  descriptor.value = () => {
    if (type.isLogin) {
      method()
    } else {
      console.log('请登录')
    }
  }
}
class User {
  @AccessDecorator
  show1() {
    console.log('查看文章')
  }
  @AccessDecorator
  show2() {
    console.log('保存文章')
  }
}
new User().show1()
new User().show2()
