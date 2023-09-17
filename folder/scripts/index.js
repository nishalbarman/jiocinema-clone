// "use strict";

// function myDetails(name, age, address, sendFuntion) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.printAge = sendFuntion;
// }

// let b = 10;
// console.log(b);

// let object1 = new myDetails(
//   "Nishal",
//   21,
//   "Vill./P.O. - Balikaria, Nalbari, Assam",
//   function () {
//     console.log(this.age);
//   }
// );

// console.log(object1);
// object1.printAge();

// let a = 10;

// console.log(a);

// function productDetails(title, desc, price, strikePrice) {
//   this.title = title;
//   this.description = desc;
//   this.price = price;
//   this.strikePrice = strikePrice;
// }

// let arr = [
//   new productDetails("My Men Topi", "My phone is very good", 200, 1000),
//   new productDetails("Phone Case", "Phone case is very OP", 149, 1600),
// ];
// console.log(arr);

// let obj = {
//   name: "Nishal",
// };

// // contructor function
// function appendAge(age) {
//   this.age = age;
// }

// function appendAddress(add) {
//   this.address = add;
// }

// function appendState(state) {
//   this.state = state;
// }

// let bindFunc = appendAge.bind(obj, 21);
// bindFunc();

// appendAddress.call(obj, "Balikaria");
// appendState.apply(obj, ["Assam"]);

// console.log(obj);

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.country = "America";
  this.gender = "male";
}

const userDetails = new User("Jhon", "Dyneo");
console.log(userDetails);

let object = {
  name: "Nishal",
  age: 21,
  print: function () {
    console.log(`My Name is : ${this.name}, and age is : ${this.age}`);
  },
};

object.print.call({ name: "Tanmay", age: 16 });
object.print.apply({ name: "Tanmay", age: 16 });
let bindFunc = object.print.bind({ name: "Tanmay", age: 16 });
bindFunc();
