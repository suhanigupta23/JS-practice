const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.filter[ (num) => num>4]
console.log(newNums);

//DUSRA TARIKA FOR IF NOT USING FILTER DIRECTLY
// const newNums= []
// myNums.forEach( (num) => {
//     if(num >4) {
//         newNums.push(num)
//        }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992,edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999,edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989,edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009 ,edition: 2014},
    {title: 'Book One', genre: 'Fiction', publish: 1981,edition: 2004},
];
const userBooks = books.filter( (bk) =>bk.genre === 'History' )
const userbooks = books.filter( (bk) => { return bk.publish >= 2000 })
const userBook = books.filter( (bk) => {
    return bk.publish >= 199 && bk.genre === "History"
})
console.log(userBooks);
console.log(userbooks);
console.log(userBook);