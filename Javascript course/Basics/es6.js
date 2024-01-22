//ES6 are also called as ECMA Script it is an updated version of javascript.which was itroduced in 2015,
//it was the first major updated to the language since 2009(ES5),so ES2015 is often called as ES6.

//1)let keyword
//______________

// let x=10;

// if(x==10){
//     let x =20;
//     console.log(x)
// }
// console.log(x);

// var a = 10;
// console.log(window.a);

// let a = 10;
// console.log(window.a); //undefined

// for (var i = 0; i < 5; i++) {
//   console.log(i);
//   setTimeout(function () {
//     console.log(i);
//   },2000);
// }

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// { // enter new scope, TDZ starts
//     let log = function () {
//         console.log(message); // messagedeclared later
//     };

//     // This is the TDZ and accessing log
//     // would cause a ReferenceError
//     let message= 'Hello'; // TDZ ends

//     log(); // called outside TDZ

// }

// function count(){
//     var x=10
// }
// console.log(x) //you can't the variable outside the function.

// for (var i = 0; i < 5; i++) {
//   console.log("inside loop : " + i);
// }
// console.log("outside loop : " + i);

// for (let i = 0; i < 5; i++) {
//     console.log("inside loop : " + i);
//   }
//   console.log("outside loop : " + i); here u will get reference error i is not found.

//2)const key word
//_________________

// let a = 10;
// a = 20;
// a = a + 5;
// console.log(a);  //25

//the variables decalred with const keyword are 'immutable' we can't reassign them to different values;
//if u want reassign u will get type error.

// const pi = 3.14;
// pi = 3.25;
// console.log(pi); type error

// const RED = 24; //We must initialize at the time of decalration.

// const person = {
//   age: 30,
// };
// person.age = 40;
// console.log(person.age); //returns 40;

// person = {
//   age: 25, //type error
// };

// const person = Object.freeze({ age: 20 });
// person.age = 34;
// console.log(person.age);//return 20

//Object.freeze() is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties.

// const company = Object.freeze({
//   name: "ABC corp",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     zipcode: 95134,
//   },
// });
// company.address.country = "USA"; // OK
// console.log(company.address.country);

//we cant reassign array as well/

//3)Default parameters
//_____________________

//In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

// function say(greet = 'Hi'){
//     console.log(greet)
// }
// say();
// say('hello')

//Arguments vs Parameters
//________________________

//parameters are what you specify in the function declaration whereas the arguments are what you pass into the function.

// function add(x, y) {  //parameters
//     return x + y;
//  }

//  add(10,20); //arguments

// function say(message) {
//     console.log(message);
// }

// say(); // undefined

// function say(message='Hi') {
//     console.log(message);
// }

// say(); // 'Hi'
// say(undefined); // 'Hi'
// say('Hello'); // 'Hello'

// function add(x, y = 1, z = 2) {
//     console.log( arguments.length );
//     return x + y + z;
// }

// add(10); // 1
// add(10, 20); // 2
// add(10, 20, 30); // 3

//4) Rest operater
//_________________

//a rest parameter allows you to represent an in definite number of arguments as an array.

// function add(a, b) {
//   console.log(a + b);
// }
// add(3,4);
// add(3,5,7,8,78);

// function add(...values) {
//   let sum = 0;
//   values.map((e) => {
//     sum += e;
//   });
//   console.log("sum :", sum);
// }
// add(3, 4);
// add(3, 5, 7, 8, 78);

// function add(...values){
//   let sum =  values.reduce((prev , curr) => {
//     // console.log(prev);
//     // console.log(curr);
//     return prev+ curr;
    
// } );

//   console.log(sum)
// }
// add(3,5);
// add(4,6,8,33,67,89,90);

// function nums(a, b, c, ...args) {
//   console.log(a , b ,c, args);
// }
// nums(2, 3, 4, 5, 6, 7, 8);

// function sum(...args){
//     let total =0;
//     for( i of args){
//         total = total + i;
//     }
//    console.log(total);
//    console.log(args)
// }
// sum(4,5,8,9,2,1,6,3);

// function sum(...args) {
//   return args
//     .filter(function (e) {
//       return typeof e === "number";
//     })
//     .reduce(function (prev, curr) {
//       return prev + curr;
//     });
// }

// let result = sum (10,20,4,"hi",null ,undefined);
// console.log(result); //result 34

// const addStr = (...args) =>{
//    return args.reduce(function(prev,curr){
//     return prev + ' ' + curr
//    });
// };
// let msg = addStr('Hello' ,'wecome to' ,'javascript');
// console.log(msg);

//5) spread operator
//__________________
//spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.

// const a = [1, 2, 3, 5];
// const b = [6, 7, 8, 9];
// const combine = [...a, ...b];  //it doesn't modify the original array
// console.log(combine);

//another way.

// let rivers = ['nile','ganges','yamuna'];
// let moreRivers = ['krishna','penna'];
// [].push.apply(rivers,moreRivers);
// console.log(rivers);

//spred operators with arrays

// const team1 = ["player1", "player2"];
// const team2 = ["player3"];
// // const myTeam = team1.concat(team2);
// const myTeam = [...team1, ...team2]; //use if there more than two arrays.
// console.log(myTeam);
// //if i want add one more member to an array.
// const newPlayer = "new Player";
// // console.log(team1.concat(newPlayer));
// console.log(...team1, ...newPlayer);
// //with concat method we cancat string  or array.

//spread operators in objects
//___________________________

// const stu = {
//   name: "bhanu",
//   branch: "it",
// };

// const personalDetails = {
//   age: 21,
// };
// const cloneStu = { ...stu };
// console.log(stu);
// console.log(cloneStu);

// const fullDetails = { ...cloneStu, ...personalDetails };
// console.log(fullDetails);

//spread operator in functions

//console.log(Math.min(23, 45, 66, 77, 898, 12, 354, 6, 78, 3, 55));

// const scores = [97, 99, 45, 33, 77, 24];

//console.log(Math.min(scores));//NaN
//console.log(Math.min(...scores));

//immutability with spread operator
//__________________________________

// const todos = [
//   { task: "reading", completed: true },
//   { task: "painting", completed: false },
// ];

// // function addToDo(newTodo) {
// //   todos.push(newTodo);     //it will modifies our original array.
// // }

// function addToDo(newTodo) {
//   return [...todos, { ...newTodo }]; //here we are returning new array with out touching original array.
// }

// const newList = addToDo({
//   task: "walking",
//   completed: false,
// });
// console.log(todos);
// console.log(newList);

//6)Arrow function
//_________________

// const sum = (a,b) =>{
// console.log(a+b)
// }

// const sum = (a ,b) =>  console.log(a+b);

// const sum = b => console.log(x+b);

//imp
//____

// function addToCart() {
//   this.productName = "laptop";
//   this.getProduct = function () {
//     console.log(this);
//     const that = this
//     setTimeout(function () {
//       console.log(that);
//       console.log(that.productName);
//     }, 1000);
//   };
// }
// let obj = new addToCart();
// obj.getProduct();

//solution with arrow
//___________________

// function addToCart() {
//     this.productName = "laptop";
//     this.getProduct = function () {
//       console.log(this);
//       setTimeout(()=>{
//         console.log(this);
//         console.log(this.productName);
//       }, 1000);
//     };
//   }
//   let obj = new addToCart();
//   obj.getProduct();

// function args(){
//   console.log(arguments)
// }
// args(10,20);
// args(2,3,4,5)

// const args =( ) =>{
//   console.log(arguments)
// }
// args(10,20);
// args(2,3,4,5)   //in arrow function we can not bind the arguments.
//to over come this rest operation was came into picture.

//we mostly use in promises and callbacks.

//we can't use arrow functions in object methods.

// const user = {
//   name: "bhanu",
//   getName: () => {
//     console.log(this);
//     return `User name is ${this.name}`;
//   },
// };
// console.log(user.getName());  //it points the globl scope istead of outer scope.

// const user = {
//     name: "bhanu",
//     getName: function() {
//       console.log(this);
//       return `User name is ${this.name}`;
//     },
//   };
//   console.log(user.getName());  //here u will get the result.
//same rule will applicable for class properties as well.

//mutable and immutable objects
//______________________________

//if the value can change, the object is called mutable.
//while if the value cannot change, the object is called immutable.

//primitive datatypes :
//___________________
//string, numbers, boolean ,symbol,null,undefined.

//non-primitive / reference type :
//_______________________________

//array , and objects are reference type.

// let x = 10;
// let y = x;

// y = y + 1;

// console.log(x);
// console.log(y);

// here x and y are storing the variable in different memory locations,
//as we know that primitive data types stores the values directly in the memory.
//what ever the operation or action that u perform on y it is limited to y.
//so that's why we called these are immutable.

// let a = ["book1", "Book2"];
// let b =a ;
// b.push('Book3');

// console.log(a);
// console.log(b);

//since arrays are reference ,a and b pointing the same reference location so ,that's why any action perform any action b it will refect as well on a.
//so object and arrys are mutable. it's happening based on the way it stores in the memory.

// let emp = {
//   name: "Upendra",
//   city: "chennai",
// };

// let emp1 = emp;
// emp1.age = 26;

// console.log(emp);
// console.log(emp1);

//it's very imp that how u are mutating the objects.

//changing array into mutable
//____________________________

// let a = ["book1", "Book2"];
// //let b = a.concat();
// let b = [...a];

// b.push("Book3");

// console.log(a); //in this case array is immutable.
// console.log(b);

//changing obj into mutable
//_________________________

// let emp = {
//   name: "Upendra",
//   city: "chennai",
// };

// //let emp1 = Object.assign({}, emp);
// let emp1 = { ...emp };
// emp1.age = 26;

// console.log(emp);
// console.log(emp1);
