// loops are also called as iterative statements.
//uses
//_____
//1.time will be saved
//2.code length will be reduced.
//3.readability iuncreses.

//basically there are five loops in js
//____________________________________
//1)for loop
//2)while loop
//1)do-while
//1)for-in
//1)for-of

//1) for loop
//_____________
// console.log("hello javascript ");
// console.log("hello javascript ");
// console.log("hello javascript ");
// console.log("hello javascript ");

// for(let i =0; i<4; i++){
//     console.log("hello javascript")
// }

//for suppose we want add nums from 20 to 30;

// var sum = 0;
// for (let count = 20; count <= 30; count++) {
//   sum = sum + count;
// }
// console.log(sum);

//home work
// var n = +prompt("enter num");

// var sum = 0;
// for (let count = 0; count <= n; count++) {
//   sum = sum + count;
//   console.log("sum of  " + n + " numbers is : " + sum); //want see every iteration.
// }
// console.log("sum of  " + n + " numbers is : " + sum); //want to see final result.

//2)while loop;
//_____________

// let num = 0;
// let sum = 0;
// while (num <= 10) {
//   sum = sum + num;
//   num++;
// }
// console.log(sum);

// let num = +prompt("enter num");
// while(num != 0){
//     console.log("enter number :"+ num );
//     num = +prompt("enter number");
// }

//3)do-while   - If we want execute the code atleast one time..in that case we use this.
//___________

// let count = 0;
// let sum = 0;

// do {
//     console.log(sum) //here it excutes once
//   sum = sum + count;
//   count ++;

// } while (count <= 10);
// console.log(sum);

// let count = 5;
// do {
//   let num = +prompt("enter a number");
//   console.log("entered num : " + num);
//   count = count - 1;
// } while (count > 0);
// console.log(" !reaches to maximum attempts wait for some time");

//template literals in js
//_______________________

// let str = "javascript";
// console.log("hello wlcome to " + str + " course");

// let str = 'React';
// console.log(`hello welcome  to  ${str} course`);

// let a = 20;
// let b = 30;
// console.log(`sum of ${a} and ${b} is : ${a + b}`);

// console.log("hello \ world\""); return hello "world"
// console.log("hello \nworld");

