// PRIMITIVE

// 7 types: String, Number, Boolean,, null, undefined, Symbol, BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail; //by default "undefined" value is inserted

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId); //output false

const bigNumber=2345678089765435n



// REFERENCE (non primitive)

// Array, Objects, Functions

const heroes=["shaktiman","nagraj", "minnal murali"];
let myObj = {
    name: "Ekasu",
    age: 20
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);  // typeof is undefined
console.log(typeof outsideTemp); // null ka typeof object aata hei 


/*  Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */



//+++++++++++++++++++++++++++++++++++++++++++++++++

//STACK (primitive ke liye use hota) , HEAP (non primitive)

let myName="Suhani"

let anotherName=myName
anotherName="Ekasu"

console.log(myName)
console.log(anotherName);

let useOner= {
    email:"user@protonmail.com",
    upi:"user@ybl"
}
//the user object is created inside a heap 
// whereas the other created in stack 

let userTwo= userOne

userTwo.email= "abc@gmail.com"
//here the userTwo email is changed as well as for the userOne...

console.log(userOne.email);
console.log(userTwo.email);