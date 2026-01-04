////////////////////////homeWork////////////////////////////

// 1-masala
// class Person {
//  constructor(name, age){
//    this.name=name
//    this.age=age
//  }  

//  greet(){
//    return `Ismingiz ${this.name} va yoshingiz ${this.age}`
//  }
// }

// let newObj= new Person("Inomjon",20)
// console.log(newObj.greet());

// 2-masala
// class bankAccount{
//     constructor(balance){
//      this.balance=balance
//     }

//     deposit(money){
//      this.balance+=money
//      return this.balance
//     }
//     withdraw(money){
//     if(this.balance-money>0){
//      this.balance-=money
//      return this.balance
//     }else{
//         return "Mablag' yetarli emas"
//     }
//     return this.balance
//     }
// }
// let newObj= new bankAccount(200)
// console.log(newObj.withdraw(200));

// 3-masala
// class Rectangle{
//     constructor(width,height){
//         this.width=width
//         this.height=height
//     }

//     area(){
//         let Area=this.width*this.height
//         return Area
//     }
//     perimetr(){
//         let Perimetr=2*(this.width+this.height)
//         return Perimetr
//     }
// }
// let newObj= new Rectangle(12,13)
// console.log(newObj.perimetr());

// 4-masala
// class Student{
//     constructor(name,id,grades){
//         this.name=name
//         this.id=id
//         this.grades=grades
//     }

//     calculateAverage(){
//         let Grades=0
//         let baho=this.grades
//         for (let i = 0; i < baho.length; i++) {
//             Grades+=baho[i]
//         }
//         return Grades/(baho.length)
//     }
// }
// let newObj= new Student("Inomjon","AD0661771",[37,40,44,45,42])
// console.log(newObj.calculateAverage());

// 5-masala
// class Clock {
//   constructor(time) {
//     this.time = new Date()
//     setInterval(() => {
//       this.time = new Date()
//     }, 1000)
//   }
//   displayTime() {
//     let hours = this.time.getHours()
//     let minutes = this.time.getMinutes()
//     let seconds = this.time.getSeconds()
//     return `${hours}:${minutes}:${seconds}`
//   }
// }
// let clock = new Clock()
// setInterval(() => {
//   console.log(clock.displayTime())
// }, 1000)

// 6-masala
// class Employee{
//     constructor(name,position,salary){
//      this.name=name
//      this.position=position
//      this.salary=salary
//     }

//     giveRaise(percentage){
//         this.salary+=percentage
//         return this.salary
//     }
// }
// let newObj= new Employee("Inomjon","IT",500)
// console.log(newObj.giveRaise(100));

// 7-masala
// class Order {
//   constructor(items) {
//     this.items = {}
//   }
//   addItem(item, quantity) {
//     if (this.items[item]) {
//       this.items[item] += quantity
//     } else {
//       this.items[item] = quantity
//     }
//   }
//   removeItem(item) {
//     if (this.items[item]) {
//       delete this.items[item]
//     }
//   }
//   calculateTotal() {
//     let total = 0
//     for (let item in this.items) {
//       total += this.items[item]
//     }
//     return total
//   }
// }
// let order = new Order()
// order.addItem("apple", 3)
// order.addItem("banana", 2)
// order.addItem("apple", 1)
// order.removeItem("apple")
// console.log(order.calculateTotal())

// 8-masala
// class Calculator{
//     constructor(num1,num2){
//      this.num1=num1
//      this.num2=num2
//     }

//     add(){
//         let Add=this.num1+this.num2
//         return Add
//     }

//     subtract(){
//         let Subtract=this.num1-this.num2
//         return Subtract
//     }

//     multiply(){
//         let Multiply=this.num1*this.num2
//         return Multiply
//     }

//     divide(){
//         let Divide=this.num1/this.num2
//         return Divide
//     }
// }
// let newObj= new Calculator(26,2)
// console.log(newObj.divide());

// 9-masala
// class Stack{
//     constructor(items){
//         this.items=[]
//     }
//     push(value){
//      this.items[this.items.length]=value
//     }
//     pop(){
//         if(this.items.length===0){
//          return null
//         }
//         let oxiri=this.items[this.items.length-1]
//         this.items.length=this.items.length-1
//         return oxiri
//     }
//     isEmpty(){
//        return this.items.length===0
//     }
// }
// let newObj= new Stack()
// newObj.push(10)
// newObj.push(20)
// console.log(newObj.isEmpty());

// 10-masala
// class Vehicle{
//     constructor(speed){
//         this.speed=speed
//     }
// }

// class Car extends Vehicle {
//     constructor(speed,feil) {
//         super(speed)
//         this.feil=feil 
//     }
// }
// let newCar= new Car("100km/h","20l")
// console.log(newCar.speed);



/////////////amaliyot////////////////////

// 1-masala
// class Animal{
//     constructor(name,specias){
//      this.specias=specias
//      this.name=name
//     }

//     speak(dog,cat,lion){
//         this.dog=dog
//         this.cat=cat
//         this.lion=lion
//     }
// }
// let newObj= new Animal()
// newObj.speak("vof","miyav","okirish")
// console.log(newObj.lion);

// 3-masala
// class User {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
//     login(username, password) {
//         if (this.username === username && this.password === password) {
//             return "Tizimga kirdingiz";
//         }
//         return "Login yoki parol xato";
//     }
//     logout() {
//         return "Akkauntdan chiqildi";
//     }
// }
// let newObj = new User("@jumanazarov", "inomjon_1234");
// console.log(newObj.login("@jumanazarov", "inomjon_1234"));



