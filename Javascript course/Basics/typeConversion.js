//type converions
//1.Implicit type
//2.explicit type

//1.implicit type conversion (coercion)
//_____________________________________

// let a = 7;
// let b = "5";
// let c = 5;
// let d = "3";
// let e = "123jc";
// let f = 4.15;
// let g = "2.45hj";

//console.log(a + b); returns  75
// console.log(a - b);  returns 2
// console.log(a - "s"); returns NaN
// console.log(a * "s"); returns NaN
// console.log(a + true); here true value will we be 1 so it adds 7 and 1.
// console.log(a + false); here false value will be 0 so it subtracts 7 - 0.
// console.log(a-true); returns 6;
// console.log(b-true);  returns 4;
// console.log(a-false);returns 6;
// console.log(b-false); returns 5;
// console.log(a*b); returns 35;
// console.log(a/b); returns 1.5;
// console.log(a%b); returns 2;

//2.explicit conversion  :number ,string ,boolean.
//______________________

//1)Number
//________
// console.log(b);
// console.log(typeof b);
// let num = Number(b);
// console.log(num);
// console.log(typeof(num));
// console.log(e);
// console.log(typeof(e));
// let num = Number(e);
// console.log(num);
// let parse = parseInt(e);
// console.log(parse);
// console.log(typeof parse);
// let parseNum = parseInt(f);
// console.log(parseNum);
// let parsefloat = parseFloat(g);
// console.log(parsefloat + " : " + typeof g);//returns type number.
// console.log(Number(true)); returns 1;
// console.log(Number(null)); returns 0;
// console.log(Number(undefined)); returns NaN;

//2)string
//__________

//let str = String(a);
// console.log(str + " : "+ typeof str);
// console.log(String(true)); returns true;
// console.log(String(null)); returns null; it just return string FormData.

//3)boolean
//_________

//if we take numbers in boolean values returns 'true' except 0 and null,undefined values.
// console.log(Boolean(1)); returns true;
// console.log(Boolean(0)); returns false;
//console.log(Boolean(-2)); returns true;
// console.log(Boolean(null)); raturns false;
// console.log(Boolean(undefined)); returns false;
// console.log(Boolean("hi")); returns true;
// console.log(Boolean("")); returns falsel

