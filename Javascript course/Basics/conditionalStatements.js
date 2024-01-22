//types of conditional statements
//_________________________________

//1. if statement.
//2.if-eslse statement.
//3.if -else if- statement.
//4.switch statement.

//1&2.if statement & if-else statements
//___________________________________

// let s = prompt("Enter The Score");
// document.write(s);

// if (s >= 35) {
//   document.write(" : you are pass");
// } else {
//   document.write(" : you are failed");
// }

// let age = prompt("enter your age ");

// if (age >= 18) {
//   alert("you are eligile to vote");
// } else {
//   alert("you are not eligible to vote");
// }

// var balence = 10000;
// var amount = prompt("enter the amount to be transfer");

// if (amount < balence) {
//   alert("before deductiom ,:" + balence);
//   balence = balence - amount;
//   alert("deduted successfully");
//   alert("after dedution your balence : " + balence);
// } else {
//   alert("your balence is : " + balence + "  !enter less than your balence");
// }

//3.else - if statements :
//_______________________

// var score = prompt("enter your marks");
// var grade;

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 60) {
//   grade = "D";
// } else if (score >= 50) {
//   grade = "E";
// } else {
//   grade = "F";
// }
// console.log("your marks is :" + score + " your grade is : " + grade);

//4. switch statement :
//___________________

// let num1 = +prompt("enter num 1");
// let num2 = +prompt("enter num 2");
// let op = prompt("enter operand");

// switch (op) {
//   case "+":
//     console.log("sum of two nums is : " + (num1 + num2));
//     break;
//   case "-":
//     console.log("sub of two nums is : " + (num1 - num2));
//     break;
//   case "/":
//     console.log("div of two nums is : " +( num1 / num2));
//     break;
//   case "*":
//     console.log("mul of two nums is : " + (num1 * num2));
//     break;
//   case "%":
//     console.log("rem of two nums is : " + (num1 % num2));
//     break;
//   default:
//     console.log("enter valid inputs");
// }

// let num = "5";
// console.log(typeof num);
// let int = +num;
// console.log(int + " : " + typeof int);
