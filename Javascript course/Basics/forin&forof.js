//with arrays
//______________

// var cars = ["audi", "bmw", "volvo", "lexus", "tesla"];

//it point outs evry index in the array / as well as we can points both index and value.
// for (car in cars) {
//   //console.log(car); //returns index.
//   console.log(cars[car]);
// }

// for(i =0 ; i<= cars.length ; i++){
//     console.log(cars[i])
// }

//it point outs each item in an array.
// for (car of cars) {
//   console.log(car);
// }

//with objects
//____________

//we can use for-of for key-value grops.
//let prolangs = { 1: "java", 2: "python", 3: "javascript", 4: "c#" };

// for (langs of prolangs) {
//   console.log(langs); // error
// }

// for (langs in prolangs) {
//   console.log(prolangs[langs]); //returns values.
// }

//with strings
//____________

 //var str = "javascript";

// for (i in str) {
//   console.log(i) // points index.
//   console.log(i + ':' + str[i]); //points both index and values.
// }

// for( i of str){
//     console.log(i) //points values.
// }

//con : for-in we can use with arrays,strings and objects
// for-of we can't use with objects.