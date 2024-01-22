// var course  = "react";

// function getCourse(){
//     console.log(this.course);
// };
// getCourse();

// 1.call
// _______

// eg-1
// _____

// var person ={
//     name : "Bhanu Prakash"
// }
// function greet(){
//     return `Hello Mr. ${this.name}`
// }
// const greeting = greet.call(person);
// console.log(greeting);

//eg-2
//_____

// var employee = {
//   name: "Ravi",
//   age: 22,
//   getName: function () {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   },
// };
// employee.getName();

// var emp = {
//   name: "Bhanu Prakash",
//   age: 21,
// };
// employee.getName.call(emp);

// eg-3
// ____

// employee = {
//     salray : 25000
// }

// function getSalary(name , compamy){
//     console.log(this);
//     console.log('name :'+name +' , salary : '+this.salray + ' , company :'+compamy)
// }
// getSalary.call(employee ,' Bhanu','Google');

// 2.apply
//_________

//similar like call method but the difference is pass parameter in array format.

// var bike ={
//     brand : 'Royal Enfield',
//     getModel :function (model){
//         return `Bike brand is ${this.brand} and model is ${model} `
//     }
// }

// var bikeObj ={
//     brand : 'kawasaki'
// }
// let bikeDetails = bike.getModel.apply(bikeObj,['Ninja']);
// console.log(bikeDetails);

//3.bind
//_______

//eg-1
//_____

// var movieInfo = {
//   castDetails: function (movie) {
//     return `  Movie name :${movie} 
//  hero is : ${this.hero} 
// heroin is : ${this.heroin}`;
//   },
// };
// var cast = {
//   hero: "Ranbir",
//   heroin: "Tripti",
// };
// var movieDetails = movieInfo.castDetails.bind(cast, "Animal");
// console.log(movieDetails());

//eg-2
//_____

// var greet ={
//     greetEmp :function(greets){
//         console.log(greets + ' ' +this.name)
//     }
// }
// var Emp1 ={
//     name : "Bhanu prakash"
// }
// let wish = greet.greetEmp.bind(Emp1);
// wish('Good morning');
// wish('Good Evening');