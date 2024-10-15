let score="33"
// if score= null ..then 0 
//if score=true ...then 1 
//if score=undefined ..then NaN
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score) //score string converted to int
console.log(typeof valueInNumber)
console.log(valueInNumber)  //when we print it is not a number NaN

// "33" => 33
// "33abc"=> NaN
// true => 1; false =>0




let isLoggedIn=1
// 1 => true; 0 => false
// "" => false.   empty strings 
// "Ekasu" => true
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 





let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********** OPERATIONS **************//
let value=3
let negValue= -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="Hello"
let str2=" Ekasu"

let str3=str1+str2;
console.log(str3); 

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);    // output : 122 
console.log(1+2+"2");     // output: 32


console.log(+true);
console.log(+"");

let num1, num2, num3

num1= num2 = num3 = 2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);