// Sum all numbers in [2, 4, 6, 8] using reduce.
//
// From [12, 5, 8, 130, 44], find the first number greater than 10 using find.
//
// Check if all numbers in [2, 4, 6, 8] are even using every.
//
// Check if at least one number in [1, 3, 5, 8] is even using some.
//
// Given [{name:"A", age:20}, {name:"B", age:17}, {name:"C", age:25}], return names of users older than 18 using filter + map.

const arr = [2,4,6,8]
const sum = arr.reduce((acc, value)=> acc+value, 0)

const findArray = [12,5,8,130, 44]
const findGreater = findArray.find((value) => value>10)

const everyArray = [2,4,6,8]
const everyCheck = everyArray.every((value) => value%2 ===0)

const someArray = [1,3,5,8]
const someCheck = someArray.some((value) => value%2 ===0)

const data = [{name:"A", age:20}, {name:"B", age:17}, {name:"C", age:25}]
const filteredData = data.filter((value) => value.age>18).map((value) => value.name)
console.log(filteredData)

