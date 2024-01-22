// console.log("hello welcome js");
// alert("hello javascript");

//1) varables in Js.

// variables to declare values
// -----------------------------

// 1.var 2.let 3.const
// let and const are introduced in ES6 2015.
//  eg: variable variableName = value

// var score;
// console.log(score);

// let marks;
// console.log(marks);

// const gpa = 7.5;
// console.log(gpa);
//here we get syntax error caz- when ever we are are going to declere a variabele it must initialized in the same line.

// console.log(age);
// let age =22;
//here we will get reference error -
//the variable declared with let keyword can't access before initialization.

//but with var keyword both cases are possible.

// var age = 34;
// var age =25;
// var age =55;
// console.log(age);
//with var keyword we can redeclare the variables.

// let age = 23;
// let age = 35;
// console.log(age);
//here we will get syntax error.
//we can't redecalre the variables by using let keyword.

// const pi = 3.14;
// const pi = 3.25;
// console.log(pi);
//here we will get syntax error.
//we can't redecalre the variables by using const keyword.

//let and const  having  block level scope whrere as var having global scope.

//scope of key words.

// {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);
// {
//     const x = 20;
//     console.log(x);
//   }
//   console.log(x);
//here we are not able to access the variable out side of the block that declared with let same for const.

//Rules  for variables names
//--------------------------
//1.variable names contains only letters (a-z,A-Z),digits (0-9),_,$.
//2.variables should starts with letters(a-z,A-Z)or_ .
//3.variables are case sensitive.
//4.CamelCase is a convention to name variables. 

// var profession& = 'lawyer'
// console.log(profession&);
//here we get syntax error





