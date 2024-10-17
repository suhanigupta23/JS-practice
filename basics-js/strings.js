const name="Suhani"
const repoCount=50

console.log(name+" "+repoCount+" Value")
// older syntax 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//newer way to write in Javascript

const gameName= new String ('Ekasu-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));


//making newsubstring
const newString=gameName.substring(1,3)
// newString created which consist of substring of 1 th index to 3 rd index ,but the last index is not included
//negative index value can also be given in substring but it will ignore and starts from index 0
console.log(newString);

const anotherString=gameName.slice(-2,3)
// newString created which consist of substring of -6 th (matlab piche se count karega) index to 3 rd index ,but the last index is not included
console.log(anotherString);

const newStringOne="  Ekasu  "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim removes extra spaces

const url="https://Ekasu.com/Ekasu%20Gupta"

console.log(url.replace('%20','-'))
// replace replaces the given substring with the new provided

console.log(url.includes('Ekasu'))
//whether includes the given string or not 

console.log(gameName.split('-'))
//tell from where we have to split 


