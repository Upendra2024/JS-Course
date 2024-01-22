//Sting Methods
//_____________
// 1) changing string cases
//_________________________
//a)toUpperCase
//b)toLowerCaae

// eg-1
// let name = "bhanu prakash";
// const upperCase = name.toUpperCase();
// console.log(upperCase);
// const lowerCase = upperCase.toLowerCase();
// console.log(lowerCase);

// eg-2
// const Stream = (id) => {
//   if (id > 0) {
//     return "positive";
//   }
// };
// console.log(Stream(-1)?.toUpperCase());

//eg-3
// const isCompleted = true;
// const res = String.prototype.toUpperCase.call(isCompleted);
// console.log(res);
// console.log(res.toLowerCase());

//eg-4

// const person = {
//   name: "BHANU PRAKASH",
//   getUser: function () {
//     return this.name;
//   },
// };

// const transform = String.prototype.toLowerCase.call(person.getUser());
// console.log(transform);

// 2)Replacing
//______________

//1.returns new string
//2.it doesn't change the original string .

//eg-1
// let str = "Learn Js, Js makes the web dynamic";
// let newStr = str.replace("Js", "JavaScript");
// console.log(newStr);
// let newstr = str.replace(/Js/g, "JavaScript");
// console.log(newstr);
//since g- is a global flag used in Regex

//eg-2
//ignoring cases
// let str = "Learn Js, js makes the web dynamic";
// let newStr = str.replace(/JS/gi, "JavaScript");
// console.log(newStr);
//here i -ignore tag ignore the cases

// eg-3
//replacer function

// let str = " in this frontend bootcamp we are giiong to learn javascript and react";
// let replacer = /javascript|react/gi;

// let newStr = str.replace(replacer, (match) => {
//   console.log({ match });
//   return match.toUpperCase();
// });
// console.log(newStr);

// replaceAll
//______________

// Eg-1
// let str = "js is a simple language, js can run in the brower";
// let newStr = str.replaceAll("js", "JavaScript");
// console.log(newStr);

// eg-2

// let str =
//   "JS is a scripting language, Js also a programming lang, js is easy to learn.";

// let pattern = /js/gi;

// let newStr = str.replaceAll(pattern, function (match, offset, str) {
//   if (match === "JS") return "JavaScript";
//   if (match === "Js") return "Javascript";
//   if (match === "js") return "javascript";
//   return "";
// });

// console.log(newStr);

// let str =
//   "RE is javascript library, re is developed by Mete, Re has huge community support.";

// let pattern = /re/gi;

// let newStr = str.replaceAll(pattern, function (match, offset, str) {
//   if (match === "RE") return "REACT";
//   if (match === "Re") return "React";
//   if (match === "re") return "react";
//   return "";
// });

// console.log(newStr);

// 3) searching
//______________

//locate a substring in string using regex

// 1.search
//___________
//The search() method accepts a regular expression and returns the index of the first match in a string:

//eg-1
// let cap = /[A-Z]/;
// let str = "welcome to Js course";
// let index = str.search(cap);
// console.log(index);

//eg-2
// let num = /[0-9]/;
// let str = "welcome to Js course";
// let index = str.search(num);
// console.log(index);

// 2. indexOf
//___________
//to get the first occurance of a substring in a string.
// it returns -1 if the string doesn't conatain subString.
// and indexof method always performs case sensitive search.
//for finding last oocurance of a substring in a string we use lastIndexof() method.

//eg-1

// let str = "javascript course";
// let fString = str.indexOf("s");
// console.log(fString);

// eg-2

// let str = 'javascript is a scripting language and javascript is programming language';
// let substr = 'javascript';

// let count = 0;

// let index = str.indexOf(substr);
// while(index !== -1) {
//     count++;
//     index = str.indexOf(substr, index + 1);
// }

// console.log(count);

// 3.lastIndexof
//________________
//find the index of last occurrence of a substring in a sring.
//it is case-sensitive method.
//it returns -1 if the str does not contain the substr.

// eg -1

// let str = "web technologies";
// let lastIndex = str.lastIndexOf("e");
// console.log(lastIndex);

//eg-2

//using from index
//________________

// let str = 'JavaScript';
// let lastIndex = str.lastIndexOf('a',2);
// console.log(lastIndex);

// eg-3

// let str = "welcome to bootcamp";
// let subStr = "y";
// let lastIndex = str.lastIndexOf(subStr);
// console.log(lastIndex);

// 4. Includes()
//______________
//this method determines whether a string contains another string:
// this method returns boolean values.
//it is case-sensitive.

// eg-1

// let userName = "Bhanu prakash";
// let subStr = userName.includes("prakash");
// console.log(subStr);

//eg -2

// let email = 'bhanu@outlook.com';
// let sChar = '@';
// let subStr = email.includes(sChar);
// console.log(subStr);

//eg-3

// let college = "SRM University";
// console.log(college.includes("U", 5));

// 5.startsWith
//______________

// it returns true if a string starts with a substring or false otherwise.
//it is case-sensitive.
// Arguments : 1.searchString
//             2.Position.

// eg -1

// let movie = "Spider Man";
// console.log(movie.startsWith("Spider"));

// eg-2

// let movie = "Iron Man";
// console.log(movie.startsWith('Man',5));

// 6.endsWith
//____________

//it returns true if a string ends with the charecter of a specified string otherwise it will be false.
//arguments : 1. searchString
//            2. length.

// eg-1

// const title = "Wings of Fire";
// console.log(title.endsWith("Fire"));

//eg-2

// const title = "My Experiments with Truth";
// console.log(title.endsWith("Experiments",14));

// concating & interpolation
//______________________________

// 1.concat
//__________
//concatenate multiple strings into a new string.

//conacantinating Strings
//________________________
// eg-1

// let userName = "Bhanu";
// let fullName = userName.concat(" ","Prakash");
// console.log(fullName);

//concatinating an array of strings
//__________________________________

// let courses = ["html", "css", "javascript", "react"];
// let frontend = " ".concat(...courses);
// console.log(frontend);

//Concatenating non-string arguments
//___________________________________

// let num = " ".concat(1, 2, 3);
// console.log(num);

// 2.Template Literals
//_____________________

// eg-1

// let userName = `bhanu prakash`;
// length = userName.length ;
// console.log(length);

// eg-2

// let msg = " Hello \n javascript";
// console.log(msg);

//eg-3

// let fName = "Bhanu";
// let lName = "Prakash";

// let fullName = ` Hello ${fName} ${lName}`;
// console.log(fullName);

// Extracting
//__________

// 1.Split
//________
//this method divides a string into an array of substrings.

// eg-1

// let str = "java is a programing language";
// let subStr = str.split(" ");
// console.log(subStr);

//eg-2

// let str = "Bhanu travelling to Goa";
// let subStr = str.split(" ",2);
// console.log(subStr);

// 2.substring
//_____________

//it returs a string between the start and end indexes.

//eg -1

// let str = "this is javascript course";
// let subStr = str.substring(8,18);
// console.log(subStr);

// eg-2

// let str = "this is javascript course";
// let subStr = str.substring(7);
// console.log(subStr);
