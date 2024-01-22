// eg:1

// var x =10 ;
// function sample(){
//     var x= 20;
//     console.log(x)
// }
// sample();
// console.log(x);

// eg :2

// var x=40;
// function outer() {
//   var y = 20;
//   function inner() {
//     var x=30
//     console.log(y);
//   }
//   inner();
//   console.log(x);
// }
// outer();

//eg :3

// //let name= "Revanth";
// function getName(){
//     // let name = "Upendra";
//     function fullName(){
//       //  let name = "Bhanu";
//        console.log('Hi my name is '+ name + ' i am a UI Devloper');
//     }
//     fullName()
// }
// getName();

// eg-4

// function x(num1){
//    function y(num2){
//      console.log(num1+num2);
//    }
//    y(10)
// }
// x(20);

// eg-5

// function studentInfo() {
//   let stu = {
//     name: "Bnanu",
//     stream: "Information Tecnnology",
//   };

//   function getDetails() {
//     return `student name is ${stu.name} pursuing ${stu.stream} in B-tech`;
//   }
//   return getDetails();
// }
// const studentDetails = studentInfo();
// console.log(studentDetails);

//eg-6
// function updateCount() {
//   let count = 0;

//   function secureCounter() {
//     count = count + 1;
//     let h2 = document.getElementById("count");
//     h2.innerHTML = `count : ${count}`;
//   }
//   return secureCounter;
// }
// let counterUpdate = updateCount();
