//The Optional Chaining Operator is a very useful feature in JavaScript that allows you to avoid errors when accessing properties or methods of an object that may not exis

// let emp = {
//   id: 52050760,
//   email: "upendra@cisco.com",
//   personalInfo: {
//     name: "Upendra",
//     mobile: 9848123456,
//     address: {
//       lane: "lakshmi nagar",
//       street: "lal street",
//       pincode: 500019,
//       city: "chennai",
//       state: "Tamilnadu",
//     },
//   },
// };

// console.log(emp.personalIn?.name);
// console.log(emp.personalInfo.address.state);

// eg-1
//______

// if (emp.personalInf?.name) {
//   console.log(emp.id);
// } else {
//     console.log(emp.personalInfo.address.city);

// }

// shorthand
// _________

// let res = emp.personalInfo?.name ?? emp.personalInfo.address.city;
// console.log(res);


