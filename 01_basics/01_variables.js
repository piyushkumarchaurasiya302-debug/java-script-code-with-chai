const accountId = 1504
let accountEmail = "piyush@gmail.com"
var accountPassword = "208600"

accountCity = "jaipur"

//accountId = 2 //  not allowed
// prefer not to use var because of the issue in block scpe and functional scope

accountEmail = "p@gmail.com"
accountPassword = "8301930"
accountCity = "prayagraj"

let accountState 

console.log(accountId)

console.table([accountId ,accountEmail, accountCity , accountPassword , accountState])