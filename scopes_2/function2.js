const user = {
    username: "Ekasu",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()

user.username= "sam"    //here context is changed 
user.welcomeMessage()

//console.log(this);    when we run ony this .. it shows empty set as no global are also there

/*
function coffee(){
    let username = "Ekasu"
   //  console.log(this);    //this mai sab display ho jata hei 
    console.log(this.username);
}
coffee()
*/
const coffee = () => {           //arrow function
    let username = "Ekasu"
    console.log(this.username);
}
coffee()


//more arrow funcitons
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4))


//if one line in function then we can write also as : , but we do not write return but use paranthesis
const addThree= (num1,num2,num3) => (num1+num2+num3)

console.log(addThree(3,4,5))

//whenever we have to return string we use curly braces inside paranthesis like:   ({username: "Ekasu"})