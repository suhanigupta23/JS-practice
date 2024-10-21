let a= 300
//global scope

if(true){
    let  a = 10
    const b = 20
    console.log("INNER: ",a);
    //block scope
}

console.log("As per global variable the value of a is: ",a);


function one(){
    const username = "Ekasu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   this will give error as webite jo local variabke hie in function usko bahar kaise access kiya ja sakta hei 
    
    two()
}

// one() 

if(true){
    const username = "Ekasu"
    if(username === "Ekasu"){
        const website= "youtube"
        console.log(username,website);
    }
    // console.log(website);   this line will give error as variabke accessed outside of block scope
}

// console.log(username);  this will give error as variable axccessed outside the block scope

//++++++++interesting++++++++
// FIRST TYPE TO DECLARE FUNCTION

console.log(addone(5))         // isko pehle bhi likh sakte hei jab pehle method se function declaration kare
function addone(num){
    return num+1
}

console.log(addone(5))         // yha bhi kar sakte hie baad mei 

// SECOND TYPE TO DECLARE FUNCTION.  THIS IS FUNCTION DECLARATION IN VARIABLE FORM 

//addTwo(5)          yha karne par error dega
const addTwo = function(num){
    return num+2
}
addTwo(5)