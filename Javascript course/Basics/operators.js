//3)Operators in Js
//------------------

//1.arthmetic operators
//2.comparision operators
//3.logical operators
//4.assignment operators
//5.type operators
//6.bitwise operators
//7.ternary operators

//1.Arthmetic operators
//______________________

//a.Add
//------

// let a = 30;
// let b = 45;
// console.log(a + b);

// let a = "java";
// let b = "script";
// console.log(a + b);

//type coercion
// let a = 30;
//let b = 25;
// let b = "script";
// console.log(a + b +c);
//here the addition operator converts num to string and both ..

//b.sub
//-----

// let a = 23;
// let b = 22;
// // console.log(a - b);

// let a = 25;
// let b = "script";
// console.log(a-b); //NaN

// let a = "java";
// let b = "script";
// console.log(a-b); //NaN

// let a = "java";
// let b = 24;
// console.log(a-b); //NaN

// c.mul
//--------

// let a = 23;
// let b = 22;
// console.log(a*b)

// let a = 'java';
// let b = 22;
// console.log(a*b) //NaN

// let a = 'java';
// let b = 'script';
// console.log(a*b); //NaN

// d.div
//----------

// let a = 25;
// let b = 5;
// console.log(a/b)

// e.modulo
//----------

// let a = 24;
// let b = 5;
// console.log(a%b); // it will gives the remainder

// f.increment
//------------
// let a = 5;
// console.log(a++); //5     a++ => a = a+1;
// console.log(a);   //6 -post increment ++a => a+1 =a;
// console.log(a--); //5
// console.log(a)    //4 -post decrement
// console.log(++a); //6 -pre increment
// console.log(--a) //4 - pre decrement

//2. comparision operators  -- return boolean values
//_________________________

//a. a==b  --> true if a and b are the same.
//b. a!=b  --> true if a and b are not same.
//c. a>b  --> true if a is greater than b.
//d. a>=b  --> true if a is greater than or eqaul to b.
//e. a<b  --> true if a is less than b.
//f. a<=b  --> true if a is less than or eqaul to b.

// let a = 4;
// let b = 5;
// let c = 7;
// let d = "5";

// console.log(a == b);
// console.log(a!= b);
// console.log(a>c);
// console.log(c<b);
// console.log(c>=b);
// console.log(b<=a);
// console.log( b==d);  // here the comparision operator converts string to num and performs operation.
// console.log(b === d);
//here == checks only the value and === checks value as well as datatype.

//3.logicl operators -returns boolean values
//__________________
//these are typically used to check two conditions.

// a && b  AND  true if both are true
// a || b  OR   true of either or both are true
// ! a     NOT  true if a is false

//console.log(4 < 5 && 6 < 7); remaining all conditions are false.
//console.log(5>6 || 6>7)  remaining all conditions are false.
//console.log( !(5==6)) if it's true returns false and vice-versa.
//document.write(!false)

//4.assignment operators
//_______________________

// let a = 10;
// let b = 9;

// +=      a += b    a = a+b
// -=      a -= b    a = a-b
// /=      a /= b    a = a/b
// *=      a *= b    a = a*b
// %=      a %= b    a = a%b

// console.log((a += b));
// console.log((a -= b));
// console.log((a /= b));
//console.log((a *= b));
// console.log((a %= b));

//5.bitwise operators
//___________________

//  op  des                  eg.        same as     result       decimal

//  &   And                 5 & 1     0101 & 0001   0001         1
//  |   OR                  5 | 1     0101 | 0001   0101         5
//  ~   NOT                 ~ 1           ~0001     1010         10
//  ^   XOR                 5 ^ 1     0101 ^ 0001   0100         4
//  <<  zero fill shift     5 << 1    0101 << 1     1010         10
//  >>  signed right shift  5 >> 1    0101 >> 1     0010         2
//  >>>  Zero fill right    5 >>> 1   0101 >>>1     0010         2

//Turnary operators
//_________________

//syntax

// condition ? expression_1 : expression_2;

// let salary = 22000;

// var hike = salary > 25000 ? "you got hike letter" : "you didn't got hike";
// console.log(hike);

// var marks =45;
 
// let score = marks >= 35 ? `your marks is : ${marks} you passed the exam` :`your marks is : ${marks} you failed the exam`;
// document.write(score);

