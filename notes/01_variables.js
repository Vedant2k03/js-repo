const accountId = 332018;
// immutable (value cannot be changed)

let accountEmail = "vedant@google.com";
// use for variables

let accountState;
// value = undefined

var accountPassword = "12345";
// legacy code (problem with scope)
/*
Prefer not to use var
becaouse of issue in block scope and functional scope
*/

accountCity = "Mumbai";
// is possible but not recommended

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
