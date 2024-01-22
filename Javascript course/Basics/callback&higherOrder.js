//callback and higherorder functions :
//___________________________________
//eg:1
//_____

// function one(){
//     console.log("hello this is callback function");
// }
// function two(fun){
//     console.log("hi this is highorder function");
//      fun();
// }
// two(one);
// // which one will be call first.

//eg.2
//____
// function square(a){
//     console.log(a*a)
// }
// function cube(a){
//     console.log(a*a*a);
// }
// function calculate(num,op){
//     return op(num);
// }
// calculate(7,cube);
// calculate(24,square);

//eg.3
//_____

//    function double(sum){
//     console.log(sum*2);
//    }
// function callback(sum) {
//   console.log(sum/2);
// }
// function higherOrder(num1, num2, fn) {
//   let sum = num1 + num2;
//   fn(sum);
// }
// higherOrder(25, 65, callback);
//higherOrder(25,56,double);

//passing value :
//______________
// function parent(name){
//     return ` Hello ${name} welcome to javascript course`;
// }
// function child(pass){
//   let name = "Upendra";
//   return pass(name) ;
// }
// const invite = child(parent);
// console.log(invite);

//passing obj :
//____________

// function parent(user){
//     const {name ,age,branch} =user;
//     return `I am ${name} and my age is ${age} and i am pursuing ${branch} in engineering`;

// }
// function child(callback){
//     let user ={
//         name : "Bhanu",
//         age :20,
//         branch :'Information Technology'
//     }
//    return callback(user)
// }
// const stuinfo = child(parent);
// console.log(stuinfo);

//higherOrder function  :
//_____________________
//a function that receives another function as an argument or return inside another it , called higherOrder function.

//eg:1
//_____
// function first(fun){
//     return fun()
// }
// first(()=>{
//     console.log('this is higherorder function');
// });

//eg:2
//___
// function welcome(fun){
//    return fun();
// }
// welcome(greet);
// function greet(){
//     console.log("hello welcome to India")
// }

//eg:3

// function increment(num) {
//   return num + 1;
// }
// function cube(num) {
//   return num * num * num;
// }
// function calc(arr, op) {
//   let result = [];
//   for (ele of arr) {
//     result.push(op(ele));
//   }
//   return result;
// }
// // const cubeRoot = calc([4, 5, 8, 11, 22, 43], cube);
// // console.log(cubeRoot);
// let arr = [22, 34, 45, 67, 11]
// console.log(arr);
// const increByOne = calc(arr, increment);
// console.log(increByOne);


//concept
//________

// function a(){
//  return b;
// }
// function b(){
//     console.log('Hello Kumar');
// }
// const x =(a());
// x();
