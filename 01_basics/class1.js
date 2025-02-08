const accountId = 12231
let accountName = "Nafiz"
var accountPassword = "Nafiz@1227"
accountCity = "Dhaka" // do not use memory without keywords
let accountStatement;

// accountId = 12323 {constants can not be changed}

accountName = "Zidan" // can be changed
accountPassword = "Zidan1227" // can be changed
accountCity = "Barishal" // can be changed

// console.log(accountId) 

/* we should not use var because its harmful for scopes , it can not understand scopes*/

console.table([accountId, accountName, accountPassword, accountCity, accountStatement])
