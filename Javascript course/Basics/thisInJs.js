// this key word cenarios
//_______________________
// 1.inside obj/function
// 2.inside normal function
// 3.inside an event halndler
// 4.inside a method
// 5.inside function in case of strict mode

// console.log(this);
//out side of function / obj this key will refers window obj.
//in window obj
// var a = 5;
// function alpha(){

// }
// console.log(a);
// console.log(this.a);
// console.log(window.a);

// 1.inside function

// var name = "Bhanu Prkash";

// function getName() {
//   console.log(this.name);
//   //since this keyword inside a function it refers window obj.
// }
// getName();

//inside OBJ
//__________

// var Person ={
//     name : 'Bhanu',
//     getFullName : function (){
//         console.log(this);
//         console.log(this.name + ' Prakash');
//     }

// }
// console.log(Person.name);
// console.log(Person.getFullName());

//with events
//____________

// let thisBtn = document.getElementById("btn");
// thisBtn.addEventListener("click", function () {
//   console.log("you clicked", this.textContent);
//   this.style.backgroundColor = "red";
//   this.style.color = "white";
// });

//strict mode
//____________

// "use strict";
// function abd(){
// //    "use strict";

//     console.log(this);
// }
// abd();

// console.log(this)

