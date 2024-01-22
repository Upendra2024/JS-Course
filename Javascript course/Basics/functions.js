//function:
//________
//to execute a block of code we use functions .
//code reusability.

//syntax.
//_______
// function functionName(parameters){
//   logic
//  return value;
// }
// function_name(arguments);

// function sum(num1, num2) {
//   var result = num1 + num2;
//   return result;
// }
// console.log(sum(22, 55));
// console.log(sum(45, 55));
// console.log(sum(22, 545));

//function expression
//____________________
// assigning a function  to a variable..

// let add = function sum(num1, num2) {
//   var result = num1 + num2;
//   return result;
// };
// console.log(add); //returns function
// console.log(add());//NaN
// console.log(add(23,46))

// immediate invoked function expression
//_______________________________________
//a function get's called immediatly after its expression.
//secure code

// const sum = (function add(num1,num2){
//     return num1 + num2;
// })(5,7)

//Arrow function
//_______________
// a function with out function keyword

// var printName = (name, age) => {
//   return ` Hi My name is ${name} and i am ${age} years old`;
// };
// let details = printName("Bhanu", 21);
// console.log(details);

//single param

// let square = (num) => num * num;
// console.log(square(34));

// let cube = num => num*num*num;
// console.log(cube(9));

//no-arguments

// var greet = () => console.log("Hello Poojitha");
// var greet = _ => console.log('Hello Revanth')
// greet();

//default arguments
//_________________

// function add(num1, num2 = 34) {
//   return " nun1: " + num1 + " num2 : " + num2 + " sum : " + (num1 + num2);
// }
// const sum = add(55);
// console.log(sum);

// function mul(num1 = 23 ,num2= 34){
//     console.log('num1: ',num1 ,' num2 :',num2, " product : ",num1 * num2);
// }
// mul()

// function sum(num1=4,num2){
//     return num1 + num2;
// }
// const add = sum(8);
// console.log(add);

//using rest operator
//___________________
// function add(...params) {
//   let result = 0;
// //   console.log(arguments);
// //   console.log(arguments[0]);
// //   console.log(arguments.length);
//   for (num of params) {
//     result += num;
//   }
//   return result;
// }
// const sum = add(2, 3, 55, 24, 35, 455, 32);
// console.log(sum);


