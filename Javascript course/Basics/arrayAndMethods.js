//arrays
//________

// let cricketrs = ["sachin", "kohli", "dhoni"];
// console.log(cricketrs);

// let cricketrs = new Array("kane", "smith", "miller");
//console.log(cricketrs);

// console.log(cricketrs[0]);
// console.log(cricketrs[1]);
// console.log(cricketrs[2]);
// cricketrs[3] = "rachin ravindra";
// console.log(cricketrs);
// console.log(cricketrs[3]);
// console.log(cricketrs.length);
// cricketrs[20] = "buttler";
// console.log(cricketrs);
// console.log(cricketrs[10]);

//arrray methods;
//______________

//1) push - adds the element at the end of an array.
//________
// cricketrs.push("surya");
// cricketrs.push("shami");
// console.log(cricketrs);

//2)pop - removes the element at the end of an array.
//_____

// cricketrs.pop();
// console.log(cricketrs);

//3)unshift - adds an element at the starting of an array.
//_________

// cricketrs.unshift("gill");
// cricketrs.unshift("shreyas");
// console.log(cricketrs);

//4) shift - removes an element at the  starting of an array.
//_________

// cricketrs.shift();
//console.log(cricketrs);

//5) indexof - used to find the element index
//___________
// indexOfKane = cricketrs.indexOf("kane");
// console.log(indexOfKane);

//5) slice - method returns modified array it slice the array according to the requirement.

//console.log(cricketrs.slice(2, 3)); //kane

//6)splice -method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//_________
// console.log(cricketrs.splice(2,1,'jadeja'));
// console.log(cricketrs); //replacing
// console.log(cricketrs.splice(0, 0, "Rohit"));
// console.log(cricketrs); //adding
// console.log(cricketrs.splice(2, 1));
// console.log(cricketrs); //rmoving

//7) sort - sorts an array
//________

// let sortCrickters = cricketrs.sort();
// console.log(sortCrickters);

// const numbers = [11,34,42,67,23,45,67,89];
// const sortNum =numbers.sort();
// console.log(sortNum);

//8) reverse - it reverse an array
// const reverseNum = sortNum.reverse();
// console.log(reverseNum);

//9) concat - concat method is used to merge two or more arrays.
//___________

// const letters = ["a", "b", "c"];
// const numbers = [1, 2, 3, 5];
// const alphaNumeric = letters.concat(numbers);
// console.log(alphaNumeric);

//10)entries - method of array instances returns array iterator  object that contains the key value pairs for each index in the array.
//___________

// const array = ["a", "b", "c"];
// const iterator1 = array.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

//simple method
// const arrEntries = array.entries();
// for (const ele of arrEntries) {
//   console.log(ele);
// }

// for (const ele of [, "a"].entries()) {
//   console.log(ele);
// }

//calling entries() on non-array objects.
//______________________________________

// const arryLike = {
//   length: 3,
//   0: "a",
//   1: "b",
//   2: "c",
//   3: "d",
// };

// for (const ele of Array.prototype.entries.call(arryLike)) {
//   console.log(ele);
// }

//11)includes - it determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//__________________

// const arr = [12, 34, 55, 67, 88, 44];
// console.log(arr.includes(55));

// const names = ["upendra", "avinash", "bhanu", "naveen", "teja"];
// console.log(names.includes("bhanu"));
// console.log(names.includes("revi"));

//12)join - it creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
//________

// const cars = ["audi", "bmw", "benz", "tesla"];
// console.log(cars.join());
// console.log(cars.join(''));
// console.log(cars.join('/'));
// console.log(cars.join('-'))

// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//     3: 5, // ignored by join() since length is 3
//   };
//   console.log(Array.prototype.join.call(arrayLike, "."));

//for-each method
//________________
//if we want any function excute on an array in that case we use for-each.
//syntax
//______

// Array.forEach(function funName(currItem,index,arr){
//     //code
// });

// const salaries =[20000,25000,35000,42000];
// console.log(salaries)
// salaries.forEach((salary,index)=>{
//     let increment = salary*(10/100)
//     salaries[index] = salary+increment;
// })
// console.log(salaries);

//find-method   -return element
//____________

//1.it's a callback function
//2.it returns the first element of array for which call back function returns true.

// let langs = ["java", "python", "javascript", "c#", "ruby"];
// let firstLang = langs.find((lang) => {
//   return lang.startsWith("p");
// });
// console.log(firstLang);

//some-method   -returns boolean value
//___________

// let firstOne = langs.some((lang)=>{
//    return lang.startsWith('r');
// });
// console.log(firstOne)

//every-method  -returns bool vlaue
//____________
//if all the eles is true then only it returns true

// let marks =[44,37,66,78,86];
// const score = marks.every((mark)=>{
//     console.log(mark);
//     return mark >35;
// })
// console.log(score)

//sets    : colletion of new values with out duplicates.
//________

// let set = new Set();
// set.add('bhanu');
// set.add('sravya');
// set.add('venkatesh');
// set.add('bhanu');
// set.add('naveen').add('kiran').add('avinash');
// console.log(set);

// let num = new Set();
// num.add(23).add(34).add(45).add(56).add(67);
// console.log(num);

// const names = [ 'bhanu','revanth','manisha','kiran','sai','bhanu'];
// console.log(names);

// let name = new Set(names);
// name.delete('kiran')
// name.delete('revanth');
// console.log(name);

// let city = "banglore";
// const urban = new Set(city);
// console.log(urban);
// let status = urban.has("g");
// console.log(status);
// //urban.clear();
// console.log(urban);

//looping sets
//_____________

// for(ele of urban){
//     console.log(ele)
// }

// urban.forEach((ele,index)=>{
//     console.log(ele);
//     console.log(index);
// })
////here value and index will be same.

//cheking key values
// let entri = urban.entries();
// console.log(entri);
// console.log(entri.next()); //clling each value
// console.log(entri.next());
// console.log(entri.next());
// console.log(entri.next());
