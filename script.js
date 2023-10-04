const test = 'test';



// const noOdds = values => values.filter(f => f === 0 || !(f % 2))

// console.log(noOdds([0, 1, 2, 3]));

// assert.deepEqual(noOdds([0, 1]), [0])
// assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2])




// const isSortedAndHow = array => {
//     const mainArray = [...array];

//     array.sort((a, b) => a - b)
//     const equalArr = array.every((v, i) => v === mainArray[i]);
//     const equalArrReverse = array.reverse().every((v, i) => v === mainArray[i]);

//     return equalArr
//                    ? "yes, ascending"
//                    : !equalArr && equalArrReverse
//                    ? "yes, descending"
//                    : "no";
// }


// console.log(isSortedAndHow([4, 2, 30]));

// it("[1, 2]", function() {
//     Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//   });

//   it("[15, 7, 3, -8]", function() {
//     Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
//   });

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise


// const checkExam = (array1, array2) => {
//     const result = array1.map((el, i) => el === array2[i]
//         ? 4
//         : el === '' || array2[i] === ''
//             ? 0
//             : -1).reduce((a, c) => a + c, 0);

//     return result > 0 ? result : 0;
// }


// console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));

// The two arrays are not empty and are the same length.
// Return the score for this array of answers, giving
// +4 for each correct answer,
// -1 for each incorrect answer, and
// +0 for each blank answer,
// represented as an empty string (in C the space character is used).


// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


// const smallEnough = (a, limit) => a.filter(f => f > limit ? f : null).length === 0 ? true : false

// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));

// assert.strictEqual(smallEnough([66, 101], 200), true);
// assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
// assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);




// const stantonMeasure = arr => {
//     const amountOfOne = arr.reduce((a, c) => c === 1 ? c + a : 0 + a, 0)

//     return arr.filter(f => f === amountOfOne ? f : null).length;
// }

// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));

// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.




// const insertDash = num => {
//     const splitArray = num.toString().split('');
//     let resultArr = [];

//     for (let i = 0; i < splitArray.length; i++) {
//         resultArr.push(splitArray[i])
//         if (Number(splitArray[i]) % 2 && Number(splitArray[i + 1]) % 2) {
//             resultArr.push('-')
//         }
//     }

//     return resultArr.join('');
// }


// console.log(insertDash(454793));


// assert.strictEqual(insertDash(454793),'4547-9-3');
// assert.strictEqual(insertDash(123456),'123456');
// assert.strictEqual(insertDash(1003567),'1003-567');


// const betweenExtremes = numbers => {
//     numbers.sort((a, b) => a - b);

//     return numbers[numbers.length -1] - numbers[0]
// }


// console.log(betweenExtremes([1, 434, 555, 34, 112]));


// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).


// const largest = (n, array) => n === 0 ? [] : array.sort((a, b) => a - b).slice(-n)

// console.log(largest(0, [7, 6, 5, 4, 3, 2, 1]));

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]




// const head = arr => arr[0]

// const tail = arr => arr.slice(1, arr.length)

// const init = arr => arr.slice(0, arr.length - 1)

// const last = arr => arr[arr.length - 1]


// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |


// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]


// const removeRotten = bagOfFruits => bagOfFruits === null || bagOfFruits === undefined
//     ? []
//     : bagOfFruits.map(el => el.includes('rotten') ? el.slice(6, el.length).toLowerCase() : el)



// console.log(removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]));

// Test.assertSimilar(removeRotten(["apple","rottenBanana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
// Test.assertSimilar(removeRotten([]), [])
// rottenFruit


// const myLanguages = results => {

//     let requiredResults = [];

//     const sortedObj = Object.fromEntries(Object.entries(results).sort((a, b) => b[1] - a[1]));

//     for (const key in sortedObj) {
//         if (sortedObj[key] >= 60) {
//             requiredResults.push(key)
//         }
//     }

//     return requiredResults;
// }


// console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}));

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []




// const spacify = str => str.split('').map(el => el + ' ').join('').slice(0, -1)



// console.log(spacify("hello world"));

// spacify("hello world") // returns "h e l l o   w o r l d"


// const findDeletedNumber = (arr, mixArr) => {
//     if (arr.length === mixArr.length) {
//         return 0;
//     } else {
//         return result = arr.filter(f => !mixArr.includes(f))[0];
//     }
// }

// console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]));

// Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')




// const cubeOdd = arr => {
//     if (arr.filter(f => typeof (f) === 'number').length === arr.length) {
//         return arr.reduce((a, c) => c % 2 ? a + c ** 3 : a + 0, 0)
//     } else {
//         return undefined;
//     }
// }



// console.log(cubeOdd(["a",12,9,"z",42]));

// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);


// const maxDiff = list => {
//     if (list.length === 0) {
//         return 0;
//     } else {
//         const sortedArray = list.sort((a, b) => a - b);

//         return sortedArray[sortedArray.length - 1] - sortedArray[0];
//     }
// }

// console.log(maxDiff([]));

// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7




// const divCon = x => x.reduce((a, b) => typeof (b) === 'number' ? a + b : a - Number(b), 0)



// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// assert.strictEqual(divCon([9, 3, '7', '3']), 2);
// assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
// assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);


// const toNumberArray = stringarray => stringarray.map(el => Number(el))



// console.log(toNumberArray(["1", "2", "3"]));

// ["1", "2", "3"] to [1, 2, 3]


// const adjacentElementsProduct = array => {
//     let resultArray = [];

//     for (let i = 0; i < array.length - 1; i++) {
//         let mult = array[i] * array[i + 1];
//         resultArray.push(mult)
//     }

//     return resultArray.sort((a, b) => b - a)[0];
// }


// console.log(adjacentElementsProduct([1, 5, 10, 9]));


// Test.assertEquals(adjacentElementsProduct([5, 8]), 40);
// Test.assertEquals(adjacentElementsProduct([1, 2, 3]), 6);
// Test.assertEquals(adjacentElementsProduct([1, 5, 10, 9]), 90);
// Test.assertEquals(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
// Test.assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);


// const evenNumbers = (array, number) => array.filter(f => !(f % 2)).reverse().slice(0, number).reverse()



// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));


// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]




// const getEvenNumbers = numbersArray => numbersArray.filter(el => !(el % 2))



// console.log(getEvenNumbers([2, 4, 5, 6, 7, 8, 9, 10]));

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


// const rowWeights = array => {
//     let result;
//     let firstTeam = 0;
//     let secondTeam = 0;

//     for (let i = 0; i < array.length; i++) {
//         i % 2 ? secondTeam = secondTeam + array[i] : firstTeam = firstTeam + array[i]
//     }
//     result = [firstTeam, secondTeam]

//     return result
// }

// console.log(rowWeights([29,83,67,53,19,28,96]));

// assert.deepEqual(rowWeights([80]), [80,0]);
// assert.deepEqual(rowWeights([100,50]), [100,50]);
// assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
// assert.deepEqual(rowWeights([13,27,49]), [62,27]);
// assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
// assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);

// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.


// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.


// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.






// const flattenAndSort = array => {
//     let resultArray = [];
//     for (let i = 0; i < array.length; i++) {
//         resultArray = resultArray.concat(array[i])
//     }

//     return resultArray.sort((a, b) => a - b);
// }

// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].




// const sumOfMinimums = arr => arr.map(el => el.sort((a, b) => a - b)[0]).reduce((a, c) => a + c, 0)



// console.log(sumOfMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]));

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// 1 + 5 + 20 = 26


// const oddOrEven = arr => arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even"



// console.log(oddOrEven([0, -1, -5]));

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


// const binaryArrayToNumber = arr => {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         result = result * 2 + arr[i]
//     }

//     return result;
// }

// const binaryArrayToNumberSecondVersion = arr => arr.reduce((a, b) => 2 * a + b, 0)


// console.log(binaryArrayToNumber([1, 0, 1, 1, 0, 0, 1]));


// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11




// const points = games => {
//     let result = 0;
//     for (let i = 0; i < games.length; i++) {
//         Number(games[i].split(":")[0]) > Number(games[i].split(":")[1])
//             ? result += 3
//             : Number(games[i].split(":")[0]) < Number(games[i].split(":")[1])
//                 ? result += 0
//                 : result += 1
//     }

//     return result;
// }


// console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]));


// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// assert.strictEqual(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
// assert.strictEqual(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]), 10);
// assert.strictEqual(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]), 0);
// assert.strictEqual(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]), 15);
// assert.strictEqual(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]), 12);


// const rowSumOddNumbers = n => {
//     let amountElemets = 0;
//     let sideElement;
//     let result = 0;

//     amountElemets = (n * (n + 1)) / 2
//     sideElement = 1 + 2 * (amountElemets - 1)

//     for (let i=1; i<=n; i++) {
//         result = result + sideElement;
//         sideElement = sideElement - 2;
//     }

//     return result;
// }


// console.log(rowSumOddNumbers(42));



// const mergeArrays = (arr1, arr2) => {
//     let newArr = [...arr1, ...arr2]
//     let result = [... new Set(newArr)].sort((a, b) => a - b)
//     return result
// }

// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


// const first = (arr, n) => n === null || n === undefined ? [arr[0]] : n === 0 ? [] : arr.slice(0, n)

// let arr = ['a', 'b', 'c', 'd', 'e']

// console.log(first(arr, 0));

// // var arr = ['a', 'b', 'c', 'd', 'e'];
// // first(arr) //=> ['a'];
// // first(arr, 2) //=> ['a', 'b']
// // first(arr, 3) //=> ['a', 'b', 'c'];
// // first(arr, 0) //=> [];




// const findAverage = nums => nums.reduce((a, c) => a + c, 0) / nums.length



// console.log(findAverage([1, 3, 5, 7, 9]));

// findAverage([1, 3, 5, 7]), 4


// const well = x => {
//     let result = x.map(el => el === 'good' ? 1 : 0).reduce((a, c) => a + c, 0)
//     if (result === 0) {
//         return 'Fail!'
//     } else if (result > 2) {
//         return 'I smell a series!'
//     } else if (result <= 2) {
//         return 'Publish!'
//     }

// }

// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));





// well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.


// const countBy = (x, n) => {
//     let result = []
//     for (let i = 1; i <= n; i++) {
//         result.push(x * i)
//     }

//     return result
// }


// console.log(countBy(2,5));


// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


// const smash = words => words.join(" ")



// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


// const fakeBin = x => x.split('').map(el => el < 5 ? 0 : 1).join('')



// console.log(fakeBin('45385593107843568'));

// fakeBin('45385593107843568'), '01011110001100111'


// const check = (a, x) => {
//     let b = a.find(el => el === x)
//     if (b===0) {
//         return true
//     } else if (b) {
//         return true
//     } else {
//         return false
//     }
// }


// console.log(check([101, 45, 75, 105, 99, 107], 107));


// const pickPeaks = arr => {
//     const result = {
//         pos: [],
//         peaks: []
//     }

//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             result.pos = [...result.pos, i]
//             result.peaks = [...result.peaks, arr[i]]
//         } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1] && arr.slice(i).find(el => el !== arr[i]) < arr[i]) {
//             result.pos = [...result.pos, i]
//             result.peaks = [...result.peaks, arr[i]]
//         }
//     }

//     return result
// }


// console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]));


// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)




// const moveZeros = arr => {
//     const filteredArr = arr.filter(el => el !== 0)
//     const difference = arr.length - filteredArr.length
//     for (let i = 0; i < difference; i++) {
//         filteredArr.push(0)
//     }
//     return filteredArr
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]




// const createPhoneNumber = numbers => {
//     const arrNumbers = numbers.join("")
//     let result = "(" + arrNumbers.slice(0, 3) + ")" + " " + arrNumbers.slice(3, 6) + "-" + arrNumbers.slice(6, 10)

//     return result
// }



// // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// const arrayDiff = (a, b) => {
//     let res = a
//     for (let i = 0; i < b.length; i++) {
//         res = res.filter(el => el !== b[i])
//     }
//     return res
// }

// console.log(arrayDiff([1,2,3,4,5], [1,2,3]));

// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// [1,2,3], [1,2], [3]


// const distinct = a => [...new Set(a)]


// // Input -> Output
// // [1, 1, 2] -> [1, 2]
// // [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// console.log(distinct([1, 2, 1, 1, 3, 2]));


// const addLength = str => str.split(' ').map(el => el + ` ${el.length}`)

// console.log(addLength("you will win"));

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]




// const findMultiples = (integer, limit) => {
//     let result = [];
//     let i = 1;
//     let newInteger = integer;
//     while (newInteger <= limit) {
//         newInteger = integer * i;
//         i += 1;
//         if (newInteger <= limit) {
//             result = [...result, newInteger];
//         }
//     };

//     return result;
// }




// console.log(findMultiples(4, 27));

// (5, 25), [5, 10, 15, 20, 25]
// (1, 2), [1, 2]
// (5, 7), [5]
// (4, 27), [4, 8, 12, 16, 20, 24]
// (11, 54), [11, 22, 33, 44]




// const gooseFilter = birds => {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(el => geese.includes(el) ? null : el)
// }


// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));


// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]



// const squareOrSquareRoot = array => array.map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2)

// console.log(squareOrSquareRoot([4,3,9,7,2,1]));

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]




// const howMuchILoveYou = nbPetals => {
//     const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
//     return phrases[nbPetals % 6 === 0 ? 5 : nbPetals % 6 - 1];
// }


// console.log(howMuchILoveYou(19));



// (7),"I love you"
// (3),"a lot"
// (6),"not at all"




// const divisibleBy = (numbers, divisor) => numbers.filter(el => el === 0 ? [el] : !(el % divisor) ? el : null)



// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));



// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]




// const removeEveryOther = arr => arr.filter((el, i) => i % 2 ? false : el)



// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]


// const sumMix = x => x.reduce((a, b) => Number(a) + Number(b), 0)

// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// [9, 3, '7', '3'], 22;
// ['5', '0', 9, 3, 2, 1, '9', 6, 7], 42;
// ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 41;




// const monkeyCount = n => {
//     const result = []
//     for (let i = 1; i <= n; i++) {
//         result.push(i)
//     }
//     return result
// }

// console.log(monkeyCount(10));



// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]


// const sum = numbers => numbers.reduce((a, b) => a + b, 0)

// console.log(sum([1, 5.2, 4, 0, -1]));


// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2


// Input: [-2.398]
// Output: -2.398


// const gimme = triplet => {
//     let Arr = [...triplet];
//     let mid;
//     triplet.sort((a, b) => a - b);
//     mid = triplet[1];

//     return Arr.indexOf(mid)
// }

// let arr = [5, 10, 14];

// console.log(gimme(arr));


// gimme([5, 10, 14]) => 1
// gimme([2, 3, 1]) => 0


// const triangular = n => {
//     let result;
//     if (n > 0) {
//         result = 0.5 * n * (n + 1);
//         return result;
//     } else {
//         return 0;
//     }
// }


// console.log(triangular(91523503));


// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0


// const averages = numbers => {

//     let arr = [];
//     let avr;

//     if (numbers !== null) {
//         let firstCheck = numbers.reduce((a, b) => a + b, 0)
//         let secondCheck = numbers.filter(el => el !== 0)
//         if (firstCheck !== numbers.length && secondCheck !== []) {
//             for (let i = 0; i < numbers.length - 1; i++) {
//                 avr = (numbers[i] + numbers[i + 1]) / 2;
//                 arr = [...arr, avr]
//             }
//             return arr;
//         } else {
//             console.log(firstCheck);
//             return arr;
//         }
//     } else {
//         return arr;
//     }

// }


// console.log(averages([1, 3, 5, 1, -10]));



// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]




// const solution = digits => {
//     let arr = [];
//     let result = 0;
//     for (let i = 0; i <= digits.length - 5; i++) {
//         arr = [...arr, digits.substring(i, i + 5)]
//     }
//     for (let j = 0; j <= arr.length - 1; j++) {
//         if (Number(arr[j]) > result) {
//             result = Number(arr[j]);
//         }
//     }
//     return result
// }

// console.log(solution('780189'));



// 1234567890   67890 is the greatest sequence of 5 consecutive digits.


// const factorial = n => {
//     let result = 1;
//     if (n >= 0 && n <= 12) {
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             for (let i = 2; i <= n; i++) {
//                 result = result * i;
//             }
//             return result;
//         }
//     } else {
//         throw 'RangeError'
//     }
// }


// console.log(factorial(12));



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
