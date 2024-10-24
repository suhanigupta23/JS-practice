const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10 )
const newNums = myNumbers 
                    .map( (num) => num*10 )    //first pehla map hoga execute uske baad pehle wale map par hi operation hoga dusra wala
                    .map( (num) =>  num+1 )
                    //THIS IS MAP ON MAP

                    //NOW WE CAN APPLY FILTER ON THIS 
                    .filter( (num) => num>=40 )
console.log(newNums);