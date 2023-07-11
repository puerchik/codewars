const factorial = n => {
    let result = 1;
    if (n >= 0 && n <= 12) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            for (let i = 2; i <= n; i++) {
                result = result * i;
            }
            return result;
        }
    } else {
        throw 'RangeError'
    }
}


console.log(factorial(12));



// 5! = 5 * 4 * 3 * 2 * 1 = 120
// below 0 or above 12 throw an exception of type ArgumentOutOfRangeException



// const twoOldestAges = ages => {
//     let a = ages.sort((a, b) => b - a)
//     return [a[1],a[0]]
// }


// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));


// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]


// const sequenceSum = (begin, end, step) => {
//     let result = begin;
//     if (begin > end) {
//         return 0
//     } if (begin === end || begin + step > end) {
//         return begin
//     } else {
//         for (let i = begin; i < (step !== 1 &&  i > end - step ? end - step : end); i + step) {
//             i = i + step;
//             result = result + i;
//         }
//         return result
//     }
// }


// console.log(sequenceSum(639, 778, 83));

// Testing for 639, 778, 83: expected 2166 to equal 1361
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)




// const breakChocolate = (n, m) => n * m > 1 ? n * m - 1 : 0

// console.log(breakChocolate(1, 9));




// (5, 5) , 24
// (1, 1) , 0



// const stray = numbers => {
//     let valid;
//     let result;
//     numbers[0] === numbers[1] ? valid = numbers[0]
//         : numbers[0] === numbers[2]
//             ? valid = numbers[0]
//             : valid = numbers[1]
//     result = numbers.filter(el => el !== valid)
//     return Number(result)
// }

// console.log(stray([1, 1, 2]));



// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3







// const getSum = (a, b) => {

//     let result = 0;
//     if (a === b) {
//         return a;
//     } else {
//         for (let i = (a < b ? a : b); i <= (b > a ? b : a); i++) {
//             result = result + i;
//         }
//         return result;
//     }
// }

// console.log(getSum(1, 5));



// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)





// const maskify = maskifyData => {
//     let maskifyArr = [];
//     let resultArr = [];
//     maskifyArr = maskifyData.split('')
//     if (maskifyArr.length >= 4) {
//         for (let i = 0; i < maskifyArr.length - 4; i++) {
//             resultArr = [...resultArr, "#"]
//         }
//         for (let j = maskifyArr.length - 4; j <= maskifyArr.length - 1; j++) {
//             resultArr =[...resultArr, maskifyArr[j]]
//         }
//         return resultArr.join("")
//     } else {
//             return maskifyArr.join("")
//     }
// }

// console.log(maskify(""));



// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""







// const sortByLength = arr => arr.sort((a, b) => a.length - b.length)

// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));



// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// ["Eyes", "Glasses", "Monocles", "Telescopes"]


// const dontGiveMeFive = (start, end) => {
//     let arr = []
//     for (let i = start; i <= end; i++) {
//         if (!/5/.test(i)) {
//             arr = [...arr, i]
//         }
//     }
//     return arr.length
// }


// console.log(dontGiveMeFive(1,9));



// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12




// const minMax = profit => {
//     let min = profit[0]
//     let max = profit[profit.length - 1]
//     profit.forEach(el => {
//         if (el < min) { min = el }
//         if (el > max) { max = el }
//     })
//     return [min, max]
// }

// console.log(minMax([2334454, 5]));



// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]



// const number = pageNumber => pageNumber.map((el, i) => `${i + 1}: ${el}`)


// console.log(number(["a", "b", "c"]));

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// const removeSmallest = numbers => {
//     let finalArray = numbers.slice();
//     let min = finalArray[0];
//     finalArray.forEach(el => {
//         if (el < min) {
//             min = el
//         }
//     });
//     finalArray.splice(numbers.indexOf(min), 1);

//     return finalArray
// }

// console.log(removeSmallest([ 331, 60, 272, 136 ]));

// Input: [1,2,3,4,5], output = [2,3,4,5]
// Input: [5,3,2,1,4], output = [5,3,2,4]
// Input: [2,2,1,2,1], output = [2,2,2,1]

// const sumTwoSmallestNumbers = numbers => {
//     const filterArr = numbers.filter(el => Number.isInteger(el) === true && el > 0)
//     if (filterArr.length > 3) {
//         let sortArr = filterArr.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0);
//         return sortArr
//     }
// }

// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));

// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из 4 положительных целых чисел.
// Не будут переданы числа с плавающей запятой или неположительные целые числа.

// assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
// assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
// assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
// assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
// assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");

// const getAverage = marks => Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length)

// console.log(getAverage([11,7,10,11,4,12,2,4,17,12,3,7,16,4,9]));

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
