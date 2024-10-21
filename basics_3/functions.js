console.log("E");
console.log("k");
console.log("a");
console.log("s");
console.log("u");
//this way is lenghty so we take funtions 

function sayMyName(){
    console.log("E");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("u");
}

// sayMyName()  //we call function

function addTwoNumber(number1, number2)
{
    console.log(number1+number2);
}

addTwoNumber(3,null)

function addTwoNumber(number1, number2)
{
    let result=number1+number2
    console.log("Ekasu this will be printed")
    console.log(number1+number2);
    console.log("The statement after return will not get printed")
}


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ekasu"))
console.log(loginUserMessage())


// if(username === undefined) same as if(!username)
