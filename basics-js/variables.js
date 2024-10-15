const accountId=14458
let accountEmail="geeth@google.com"
var accountPassword="12345"
accountCity="Noida"

// value in constant (const) can not be changed , once fixed it is fixed.
// accountId=2 // NOT ALLOWED 

accountEmail="gg@gmail.com"
accountPassword="21212121"
accountCity="Sirsa"
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
  Prefer not to use var 
  because of isssue in block scope and fucntional scope
*/