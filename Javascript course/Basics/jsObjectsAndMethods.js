//Objects
//________
//objects  is collection of elements in the form of properties  and methods.
//property id a key-value pair.

// let employee = {
//   name: "Bhanu",
//   id: 101,
//   company: "TCS",
// };
// console.log(employee);
// console.log(employee.name);

// let comp = "company";
// console.log(employee[comp]);

//1)how to add new props to an Object :
//_________________________________

// employee.salary = 25000;
// employee["experience"] = 2;
// console.log(employee);

//2)using new operator object constructor :
//_____________________________________

// let emp1 = new Object();
// emp1.name = "avinash";
// emp1.company = "Amazon";
// emp1["salary"] = 30000;
// console.log(emp1);

//3) Using new Operator  with constructor function :
//________________________________________________

// function user(n, a, c) {
//   this.name = n;
//   this.age = a;
//   this.company = c;
//   this.login = function (){
//     console.log("Hello " + this.name + " Welcome!");
//   };
// }

// let user1 = new user("bhanu", 21, "TCS");
// let user2 = new user("sathvik", 22, "Google");
// user2.salary = 30000;
// console.log(user1);
// console.log(user2);
// console.log(user1.name);
// console.log(user2.company);

//4)objec.create method:
//______________________

// let user3 = Object.create(user1);
// console.log(user3);
// user3.name = "Abhi";
// user3.age = 24;
// user3.company = "IBM";
// console.log(user3);
// user3.login();
// user2.login();
// user1.login();

//iteration of object :
//____________________

// for (key in employee) {
//   console.log(key, ":", employee[key]);
// }

//Object.keys
//___________
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
//console.log(Object.entries(employee));

