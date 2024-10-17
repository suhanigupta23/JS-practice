//DATES 

let myDate = new Date()
console.log(myDate);
//output not so readable 

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23)
//months starts from 0 
console.log(myCreatedDate.toDateString());

let myCreatDate = new Date(2023,0,23,5,3)
console.log(myCreatDate.toLocaleString());
//time as well as date can be created by us

//ACCORDING TO SPECIFIC FORMATS
let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
//output in milliseconds

//to have output in seconds deivide by thousands
console.log(Math.floor(Date.now()/1000));

//specific instructions to get month, year, etc whatever we want
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time` 

newDate.toLocaleString('default', {
    weekday:"long"
})