const myNums= [1,2,3]

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+ currval
},0 )     // taking value of acc from 0

const mTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
 //same code in one line 

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    }
]

const priceToPay= shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);