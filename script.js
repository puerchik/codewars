const getAverage = marks => Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length)

console.log(getAverage([11,7,10,11,4,12,2,4,17,12,3,7,16,4,9]));

// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);



// const arrayPlusArray = (arr1, arr2) => {
//     let a = arr1.reduce((a, c) => a + c, 0)
//     let b = arr2.reduce((a, c) => a + c, 0)
//     return (
//         a + b
//     )
// }


// let c = [1, 2, 3]
// let d = [4, 5, 6]

// console.log(arrayPlusArray(c, d));

// [1, 2, 3], [4, 5, 6]), 21



// const stringToArray = string => string.split(' ')

// let a = "I love arrays they are my favorite"

// console.log(stringToArray(a));




// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]




// const grow = x => {
//     return (
//         x.reduce((a, c) => a * c, 1)
//     )
// }

// const a = [4, 1, 1, 1, 4]

// console.log(grow(a));



// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// const countPositivesSumNegatives = input => {
//     let check
//     let result = []

//     if (input === null || input.length === 0) {
//         check = false
//     } else if (input.length === 2 && input[0] === 0 && input[1] === 0) {
//         check = false
//     } else {
//         check = true
//     }

//     if (check) {
//         let positive = input.filter(el => el > 0)
//         let negative = input.filter(el => el < 0).reduce((a, c) => a + c, 0)
//         return (
//             result = [positive.length, negative]
//         )
//     } else {
//         return (
//             result
//         )
//     }
// }

// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -14, -15]

// console.log(countPositivesSumNegatives(a));

//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// const invert = array => array.map(el => el * -1)

// const a = [1, 2, 3, 4, 5]

// console.log(invert(a));

//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []



// const maps = x => x.map(el => el * 2)

// const a = [1, 2, 3]

// console.log(maps(a));

//[1, 2, 3] --> [2, 4, 6]



// const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`

// const a = ["hay", "junk", "hay", "hay", "moreJunk", "moreJunk", "moreJunk", "moreJunk", "randomJunk", "needle"]

// console.log(findNeedle(a));



//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"


// const digitize = n => Array.from(String(n), Number).reverse()

// let n = 35231;

// console.log(digitize(n));


//35231 => [1,3,2,5,3]
//0 => [0]

// const countSheeps = arrayOfSheep => arrayOfSheep.reduce((a, c) => c === true ? ++a : a, 0)

// const a = [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true, true, true]

// console.log(countSheeps(a));

// const squareSum = numbers => numbers.reduce((a,c)=> a + c ** 2,0)

// const a = [1, 2, 2, 3]
// console.log(squareSum(a));

// const positiveSum = arr => arr
//                               .filter(el => el > 0)
//                               .reduce((total, currentValue) => total + currentValue, 0)

// const a = [1, -4, 7, 12, -1, 7]

// console.log(positiveSum(a));