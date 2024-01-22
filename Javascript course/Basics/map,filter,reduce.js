// map ,filter , reduce are typically used with arrays.

//1) map method
//______________

//map method returns a transformed array based on our logic.

// const users = ["bhanu", "venkatesh", "ravi"];

// const modifiedUsers = users.map((e) => {
//    return e.toUpperCase();
// });
// console.log(modifiedUsers);

//other way
//__________

// const users = ["bhanu", "venkatesh", "ravi"];

// function transformFun(val){
//     return val.toUpperCase();
// }

// const modifiedUsers = users.map(transformFun)

// console.log(modifiedUsers);

// const users = [
//   { id: 101, name: "Upendra" },
//   { id: 102, name: "Bhanu" },
//   { id: 103, name: "Ankit" },
//   { id: 104, name: "Ravi" },
// ];
// const usersList = users.map((user)=> user.name);
// console.log(usersList);

// with foreach

// let userNames = [];
// users.forEach((user) => {
//   userNames.push(user.name);
// });
// console.log(userNames);

//2)filter method
//________________

//filter method returns a new array, according to the logic it filters and give the some of the elements.

// const employees = [
//     { id: 101, name: "Upendra", profile : "software engineer" },
//     { id: 102, name: "Bhanu" , profile : "test engineer" },
//     { id: 103, name: "Ankit" ,  profile : "data engineer"},
//     { id: 104, name: "Ravi" , profile : "devops engineer" },
//     { id: 105, name: "yaswin" , profile : "devops engineer" },
//   ];

//   const devEngineer =employees.filter(function(emp){
//        return emp.profile === 'devops engineer'
//   });
//   console.log(devEngineer);

// const softEngineer =employees.filter(function(emp){
// if(emp.profile === 'software engineer'){
//     console.log(emp.name)
// }
// });

//3)Reduce method
//_______________

// const scores = [55, 78, 98, 77, 89, 65];
// function calculate(scores) {
//   let sum = 0;
//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i]

//   }
//   return sum;
// }
// const totalScore = calculate(scores);

// console.log(totalScore);

// let totalScore = scores.reduce((prev, curr) => prev + curr);
// console.log(totalScore);

// if (totalScore < 600 && totalScore > 500) {
//   console.log("Grade :A");
// } else if (totalScore < 500 && totalScore > 400) {
//   console.log("Grade :B");
// } else if (totalScore < 400 && totalScore > 300) {
//   console.log("Grade :c");
// } else if (totalScore < 300 && totalScore > 200) {
//   console.log("Grade :D");
// } else {
//   console.log("failed");
// }

// console.log(totalScore)

//combined eg:
//____________

// const employees = [
//   { id: 101, name: "Upendra", profile: "software engineer", q1: 6, q2: 8 },
//   { id: 102, name: "Bhanu", profile: "test engineer", q1: 5, q2: 7 },
//   { id: 103, name: "Ankit", profile: "data engineer", q1: 9, q2: 8 },
//   { id: 104, name: "Ravi", profile: "devops engineer", q1: 9, q2: 9 },
//   { id: 105, name: "Yaswin", profile: "devops engineer", q1: 6, q2: 7 },
//   { id: 105, name: "Rohit", profile: "software engineer", q1: 5, q2: 8 },
//   { id: 105, name: "Naman", profile: "software engineer", q1: 4, q2: 7 },
// ];

// const softEng = employees.filter((emp) => emp.profile === "software engineer");
// console.log(softEng);

// const totalRating = softEng.map((emp) => emp.q1 + emp.q2);
// console.log(totalRating);

// totalRatingScore = totalRating.reduce((acc, curr) => acc + curr);
// console.log(totalRatingScore);

//cahaining method
//________________

// const totalRatingScore = employees
//   .filter((emp) => emp.profile === "software engineer")
//   .map((emp) => emp.q1 + emp.q2)
//   .reduce((acc, curr) => acc + curr);
// console.log(totalRatingScore);
