const stringToNumber = str => +str;



console.log(stringToNumber("79"));


// Test.assertEquals(stringToNumber("1234"),1234)
// Test.assertEquals(stringToNumber("605"), 605)
// Test.assertEquals(stringToNumber("1405"),1405)
// Test.assertEquals(stringToNumber("-7"),  -7)


// const cubeChecker = (volume, side) => side && volume > 0
//     ? Math.pow(side, 3) === volume
//     : false;



// console.log(cubeChecker(125, 5));


// assert.strictEqual(cubeChecker(  8, 3), false);
// assert.strictEqual(cubeChecker(  8, 2), true );
// assert.strictEqual(cubeChecker( -8,-2), false);
// assert.strictEqual(cubeChecker(  0, 0), false);
// assert.strictEqual(cubeChecker(  1, 5), false);
// assert.strictEqual(cubeChecker(125, 5), true );



// const flickSwitch = arr => {
//     let result = [];
//     let flick = true;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "flick") {
//             flick = !flick;
//             result.push(flick)
//         } else {
//             result.push(flick)
//         }
//     }

//     return result;
// }



// console.log(flickSwitch([]));

// assert.deepEqual(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false]);
// assert.deepEqual(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]), [false, false, false, false]);
// assert.deepEqual(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true]);
// assert.deepEqual(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [false, true, false, true, false]);
// assert.deepEqual(flickSwitch(["john, smith, susan", "flick"]), [true, false]);
// assert.deepEqual(flickSwitch(["bicycle"]), [true]);
// assert.deepEqual(flickSwitch(["flick"]), [false]);
// assert.deepEqual(flickSwitch([]), []);




// const sumArray = array => array === null || array === undefined || array.length < 3
//     ? 0
//     : array.sort((a, b) => a - b).reduce((a, c, i) => i === 0 || i === array.length - 1 ? a + 0 : a + c, 0);

// console.log(sumArray([-6, 20, -1, 10, -12]));

// assert.strictEqual( sumArray(null)                     , 0 );
// assert.strictEqual( sumArray([ ])                      , 0 );
// assert.strictEqual( sumArray([ 3 ])                    , 0 );
// assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
// assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
// assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
// assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );




// const multiply = number => number * Math.pow(5, String(Math.abs(number)).length);



// console.log(multiply(10));


// Test.assertEquals(multiply(10),250);
// Test.assertEquals(multiply(5),25);
// Test.assertEquals(multiply(200),25000);
// Test.assertEquals(multiply(0),0);
// Test.assertEquals(multiply(-2),-10);




// function add(a, b) {
//     return a + b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function mod(a, b) {
//     return a % b;
// }

// function exponent(a, b) {
//     return Math.pow(a, b);
// }

// function subt(a, b) {
//     return a - b;
// }


// const removeExclamationMarks = s => s.replace(/\!/g, '');

// console.log(removeExclamationMarks("Hello World!"));

// assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");




// const hotpo = n => {
//     let result = 0;
//     while (n !== 1) {
//         if (n % 2 === 0) {
//             n = n / 2;
//             result += 1;
//         } else {
//             n = 3 * n + 1;
//             result += 1;
//         }
//     }

//     return result;
// }



// console.log(hotpo(1));

// Test.assertEquals(hotpo(1), 0);
// Test.assertEquals(hotpo(5), 5);
// Test.assertEquals(hotpo(6), 8);
// Test.assertEquals(hotpo(23), 15);




// const excludingVatPrice = price => price === null
//     ? -1
//     : +(price - price / 115 * 15).toFixed(2);



// console.log(excludingVatPrice(123));

// Test.assertSimilar(excludingVatPrice(230), 200.00);
// Test.assertSimilar(excludingVatPrice(123), 106.96);




// const pointsPer48 = (ppg, mpg) => mpg === 0 ? 0 : +((ppg / mpg) * 48).toFixed(1);



// console.log(pointsPer48(10, 10));

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48
// pointsPer48(5, 17) // 14.1
// pointsPer48(0, 0) // 0




// const toBinary = n => +n.toString(2);

// console.log(toBinary(5));



//     assert.strictEqual(toBinary(1), 1);
// assert.strictEqual(toBinary(2), 10);
// assert.strictEqual(toBinary(3), 11);
// assert.strictEqual(toBinary(5), 101);


// const quadrant = (x, y) => {
//     if (x > 0 && y > 0) {
//         return 1;
//     }
//     if (x < 0 && y > 0) {
//         return 2;
//     }
//     if (x < 0 && y < 0) {
//         return 3;
//     }
//     if (x > 0 && y < 0) {
//         return 4;
//     }
// }

// console.log(quadrant(19, -56));

// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4



// const quadratic = (x1, x2) => [1, -(x1 + x2), x1 * x2];

// console.log(quadratic(5, -4));



// assert.sameOrderedMembers(quadratic( 0,  1), [1, -1,   0]);
// assert.sameOrderedMembers(quadratic( 1,  1), [1, -2,   1]);
// assert.sameOrderedMembers(quadratic(-4, -9), [1, 13,  36]);
// assert.sameOrderedMembers(quadratic(-5, -4), [1,  9,  20]);
// assert.sameOrderedMembers(quadratic( 4, -9), [1,  5, -36]);
// assert.sameOrderedMembers(quadratic( 5, -4), [1, -1, -20]);




// const fuelPrice = (litres, pricePerLitre) => {
//     const discount = litres < 12 ? (Math.floor(litres / 2) * 0.05) * litres : 0.25 * litres;
//     const totalCost = litres * pricePerLitre - discount;

//     return Number(totalCost.toFixed(2));
// }



// console.log(fuelPrice(8, 2.5));

// Test.assertEquals(fuelPrice(5, 1.23), 5.65);
// Test.assertEquals(fuelPrice(8, 2.5), 18.40);
// Test.assertEquals(fuelPrice(5, 5.6), 27.50);




// const pillars = (numPill, dist, width) => (numPill - 1) * dist * 100 + (numPill > 1 ? numPill - 2 : 0) * width;



// console.log(pillars(11, 15, 30));

// describe("Basic tests", function () {
//     it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function () {
//         assert.strictEqual(pillars(1, 10, 10), 0);
//     });
//     it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function () {
//         assert.strictEqual(pillars(2, 20, 25), 2000);
//     });
//     it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function () {
//         assert.strictEqual(pillars(11, 15, 30), 15270);
//     });
// });



// const squareArea = a => +Math.pow(((4 * a) / (2 * Math.PI)), 2).toFixed(2);



// console.log(squareArea(14.05));

// it("squareArea(2)", function () {
//         assert.closeTo(squareArea(2), 1.62, 1e-2);
//     });

// it("squareArea(0)", function () {
//         assert.closeTo(squareArea(0), 0, 1e-2);
//     });

// it("squareArea(14.05)", function () {
//         assert.closeTo(squareArea(14.05), 80, 1e-2);
//     });




// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);



// console.log(nearestSq(9999));

// assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
// assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
// assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
// assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
// assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");




// const remainder = (n, m) => n > m ? n % m : m % n;



// console.log(remainder(17, -802));

// assert.strictEqual(remainder(17, 5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
// assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
// assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
// assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');




// const oddCount = n => Math.floor(n / 2);



// console.log(oddCount(15023));

// assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
// assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");




// const checkForFactor = (base, factor) => !(base % factor);



// console.log(checkForFactor(10, 2));


// Test.assertEquals(checkForFactor(10, 2), true)
// Test.assertEquals(checkForFactor(63, 7), true)
// Test.assertEquals(checkForFactor(2450, 5), true)
// Test.assertEquals(checkForFactor(24612, 3), true)

// Test.assertEquals(checkForFactor(9, 2), false)
// Test.assertEquals(checkForFactor(653, 7), false)
// Test.assertEquals(checkForFactor(2453, 5), false)
// Test.assertEquals(checkForFactor(24617, 3), false)


// const powersOfTwo = n => {
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//         result = [...result, Math.pow(2, i)]
//     };

//     return result;
// }

// console.log(powersOfTwo(0));


// assert.deepEqual(powersOfTwo(0), [1])
// assert.deepEqual(powersOfTwo(1), [1, 2])
// assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])




// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height;
//     }
// }

// console.log(Kata.getVolumeOfCuboid(6, 2, 5));

//   assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
//   assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);




// const twiceAsOld = (dadYearsOld, sonYearsOld) => sonYearsOld * 2 < dadYearsOld
//     ? dadYearsOld - sonYearsOld * 2
//     : sonYearsOld * 2 - dadYearsOld;



// console.log(twiceAsOld(55, 30));

//   it("Testing for dad's age: 36 and son's age: 7", function(){
//     assert.strictEqual(twiceAsOld(36,7) , 22);
//   });
//   it("Testing for dad's age: 55 and son's age: 30", function(){
//     assert.strictEqual(twiceAsOld(55,30) , 5);
//   });
//   it("Testing for dad's age: 42 and son's age: 21", function(){
//     assert.strictEqual(twiceAsOld(42,21) , 0);
//   });
//   it("Testing for dad's age: 22 and son's age: 1", function(){
//     assert.strictEqual(twiceAsOld(22,1) , 20);
//   });
//   it("Testing for dad's age: 29 and son's age: 0", function(){
//     assert.strictEqual(twiceAsOld(29,0) , 29);
//   });




// const productFib = prod => {
//     let prev = 0;
//     let curent = 1;
//     let fib = 0;
//     let result = 0;

//     for (let i = 1; i < prod; i = result) {
//         fib = prev + curent;
//         prev = curent;
//         curent = fib;
//         result = prev * curent;
//     }

//     return [prev, fib, result === prod];
// }

// console.log(productFib(602070));

// assert.sameOrderedMembers(productFib(4895), [55, 89, true])
// assert.sameOrderedMembers(productFib(5895), [89, 144, false])
// assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
// assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
// assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
// assert.sameOrderedMembers(productFib(447577), [610, 987, false])
// assert.sameOrderedMembers(productFib(602070), [610, 987, true])






// const areaOrPerimeter = (l, w) => l === w ? l * w : (l + w) * 2;



// console.log(areaOrPerimeter(6, 10));

// assert.strictEqual(areaOrPerimeter(3,  3),  9);
// assert.strictEqual(areaOrPerimeter(6, 10), 32);




// const zeroFuel = (distanceToPump, mpg, fuelLeft) => (distanceToPump / mpg) <= fuelLeft ? true : false;



// console.log(zeroFuel(50, 25, 2));

//   assert.equal(zeroFuel(50, 25, 2), true);
//   assert.equal(zeroFuel(100, 50, 1), false);




// const century = year => Math.ceil(year / 100);



// console.log(century(89));



// Test.assertEquals(century(1705), 18, 'Testing for year 1705');
// Test.assertEquals(century(1900), 19, 'Testing for year 1900');
// Test.assertEquals(century(1601), 17, 'Testing for year 1601');
// Test.assertEquals(century(2000), 20, 'Testing for year 2000');
// Test.assertEquals(century(89), 1, 'Testing for year 89');




// const basicOp = (operation, value1, value2) => {
//     switch (operation) {
//         case "+": return value1 + value2;
//         case "-": return value1 - value2;
//         case "*": return value1 * value2;
//         case "/": return value1 / value2;
//         default: return 0
//     }
// }

// console.log(basicOp("/", 49, 7));

// assert.strictEqual(basicOp("+", 4, 7), 11, "4 + 7 = 11");
// assert.strictEqual(basicOp("-", 15, 18), -3, "15 - 18 = -3");
// assert.strictEqual(basicOp("*", 5, 5), 25, "5 * 5 = 25");
// assert.strictEqual(basicOp("/", 49, 7), 7, "49 / 7 = 7");




// const summation = num => {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i;
//     }

//     return result;
// }

// console.log(summation(8));

// assert.strictEqual(summation(1), 1);
// assert.strictEqual(summation(2), 3);
// assert.strictEqual(summation(8), 36);




// const evenOrOdd = number => !!(number % 2) ? "Odd" : "Even";



// console.log(evenOrOdd(9));


//     assert.strictEqual(evenOrOdd(2), "Even");
//     assert.strictEqual(evenOrOdd(7), "Odd");
//     assert.strictEqual(evenOrOdd(-42), "Even");
//     assert.strictEqual(evenOrOdd(-7), "Odd");
//     assert.strictEqual(evenOrOdd(0), "Even");




// const slope = points => (points[2] - points[0]) !== 0
//     ? ((points[3] - points[1]) / (points[2] - points[0])).toString()
//     : 'undefined';



// console.log(slope([10, 50, 30, 150]));

// Test.assertEquals( slope([19,3,20,3]), "0" );
// Test.assertEquals( slope([2,7,4,-7]), "-7" );
// Test.assertEquals( slope([10,50,30,150]), "5" );
// Test.assertEquals( slope([15,45,12,60]), "-5" );
// Test.assertEquals( slope([10,20,20,80]), "6" );
// Test.assertEquals( slope([-10,6,-10,3]), "undefined" );


// const isPythagoreanTriple = integers => {
//     const squareIntegers = integers.map(el => Math.pow(el, 2)).sort((a, b) => a - b);

//     return squareIntegers[2] === squareIntegers[0] + squareIntegers[1];
// }



// console.log(isPythagoreanTriple([13, 12, 5]));

// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them,
// you will never find a way to satisfy the equation a2 + b2 = c2




// const sakuraFall = v => {
//     const distance = 5 * 80;
//     const result = distance / v;

//     return v > 0 ? result : 0;
// }


// console.log(sakuraFall(-1));

// assert.strictEqual(sakuraFall(5),80)
// assert.strictEqual(sakuraFall(10),40)
// assert.strictEqual(sakuraFall(-1),0)




// const all = (arr, fun) => arr.every(fun);



// console.log(all([1, 2, 3, 4, 5], function (v) { return v < 9 }));

// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True




// const uefaEuro2016 = (teams, scores) => {
//     const teamsString = `At match ${teams[0]} - ${teams[1]}, `;
//     const scoresString = scores[0] > scores[1]
//         ? `${teams[0]} won!`
//         : scores[0] < scores[1]
//             ? `${teams[1]} won!`
//             : "teams played draw.";

//     return teamsString + scoresString;
// }

// console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]));

// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."




// const nextId = ids => {
//     const uniqueSortArr = [...new Set(ids)].sort((a, b) => a - b);
//     let resultIn;
//     let resultOut;
//     if (uniqueSortArr[0] !== 0) {
//         return 0;
//     } else {
//         for (let i = uniqueSortArr[0]; i < uniqueSortArr.length; i++) {
//             if (uniqueSortArr[i] === i) {
//                 resultOut = i + 1;
//             } else {
//                 resultIn = i;
//             }
//         }
//     }

//     return resultIn < resultOut ? resultIn : resultOut;
// }



// console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Test.assertEquals(nextId([0,1,2,3,5]), 4);
// Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
// Test.assertEquals(nextId([1,2,0,2,3,5]), 4);



// const lowercaseCount = str => str.split('').filter(el => el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122).length;



// console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));

// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26




// const stockList = (listOfArt, listOfCat) => {
//     const arrListOfArt = listOfArt.map(el => el.slice(0, 1) + el.slice(-3));
//     const objListOfArt = {};
//     let result = '';

//     listOfCat.forEach(el => objListOfArt[el] = 0);

//     listOfCat.forEach(category => {
//         arrListOfArt.forEach(el => {
//             el.slice(0, 1) === category ? objListOfArt[category] += +el.slice(-3) : undefined
//         })
//     });

//     if (listOfArt.length !== 0) {
//         result = Object.entries(objListOfArt)
//             .map((el) => `(${el[0]} : ${el[1]}) - `).join('').slice(0, -3);
//     }

//     return result;
// }

// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));

// b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B", "C", "D"]
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"


// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"



// const toWeirdCase = string => string.split(' ')
//     .map(w => w.split('')
//         .map((el, i) => i % 2
//             ? el.toLowerCase()
//             : el.toUpperCase())
//         .join(''))
//     .join(' ')

// console.log(toWeirdCase("String"));


// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"




// const expandedForm = num => {
//     let result = '';
//     let resultNum = num;

//     const remainder = dividend => dividend % (Math.pow(10, (dividend.toString().length - 1)));

//     while (resultNum !== 0) {
//         if (result === '') {
//             result = (resultNum - remainder(resultNum)).toString();
//         } else {
//             result = result + ' ' + '+' + ' ' + (resultNum - remainder(resultNum)).toString();
//         }

//         resultNum = remainder(resultNum);
//     }

//     return result;
// }

// console.log(expandedForm(45));

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'




// const generateHashtag = str => {
//     const trimArr = str.split(' ').filter(f => f !== '');
//     if (trimArr.length > 140 || trimArr.length === 0 || str === '' || str === ' ') {
//         return false
//     } else {
//         const result = '#' + trimArr.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
//         return result.length > 140 ? false : result;
//     }
// }


// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false




// const humanReadable = seconds => {
//     let h = Math.floor(seconds / 3600);
//     let m = Math.floor((seconds % 3600) / 60);
//     let s = seconds % 60;

//     return `${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}`;
// }


// console.log(humanReadable(90));


// strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
// strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
// strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
// strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
// strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
// strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
// strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
// strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');


// const pigIt = str => str.split(' ').map(w => /[\.,\-\!\?]/.test(w) ? w : w.slice(1) + w.charAt(0) + 'ay').join(' ');



// console.log(pigIt('Hello world !'));

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !




// const camelCase = str => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');



// console.log(camelCase(""));

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"




// const findMissingLetter = array => {
//     let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     const charCode = array[0].charCodeAt(0);

//     if (charCode >= 97 && charCode <= 122) {
//         alphabet = alphabet.map(lt => lt.toLowerCase());
//     }

//     const arrWithLetter = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[0]) + array.length + 1);

//     return arrWithLetter.find((f, i) => f !== array[i])
// }

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'




// const solution = str => {
//     const result = str.length >= 2 ? str.match(/../g) : [str + '_'];

//     if (str === '') {
//         return [];
//     } else if (str.length % 2 && str.length > 2) {
//         if (Array.isArray(result)) {
//             result.push(str[str.length - 1] + '_')
//             return result
//         } else {
//             console.error('myArray is not an array');
//         }
//     } else {
//         return result
//     }
// }



// console.log(solution('abc'));


// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']




// const findUniq = arr => {
//     let uniqueArr = [...new Set(arr)];
//     let result;

//     if (arr[0] === uniqueArr[0] && arr[1] === uniqueArr[0]) {
//         result = uniqueArr[1];
//     } else if (arr[1] === uniqueArr[0] && arr[2] === uniqueArr[0]) {
//         result = uniqueArr[1];
//     } else if (arr[0] === uniqueArr[0] && arr[2] === uniqueArr[0]) {
//         result = uniqueArr[1];
//     } else if (arr[1] !== uniqueArr[0] && arr[2] !== uniqueArr[0]) {
//         result = uniqueArr[0];
//     }

//     return result;
// }

// console.log(findUniq([0, 0, 0.55, 0, 0]));

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55




// const decodeMorse = morseCode => {
//     const MORSE_CODE = {
//         '.-': 'A',
//         '-...': 'B',
//         '-.-.': 'C',
//         '-..': 'D',
//         '.': 'E',
//         '..-.': 'F',
//         '--.': 'G',
//         '....': 'H',
//         '..': 'I',
//         '.---': 'J',
//         '-.-': 'K',
//         '.-..': 'L',
//         '--': 'M',
//         '-.': 'N',
//         '---': 'O',
//         '.--.': 'P',
//         '--.-': 'Q',
//         '.-.': 'R',
//         '...': 'S',
//         '-': 'T',
//         '..-': 'U',
//         '...-': 'V',
//         '.--': 'W',
//         '-..-': 'X',
//         '-.--': 'Y',
//         '--..': 'Z',
//         '.----': '1',
//         '..---': '2',
//         '...--': '3',
//         '....-': '4',
//         '.....': '5',
//         '-....': '6',
//         '--...': '7',
//         '---..': '8',
//         '----.': '9',
//         '-----': '0',
//         '--..--': ', ',
//         '.-.-.-': '.',
//         '..--..': '?',
//         '-.-.--': '!',
//         '-..-.': '/',
//         '-....-': '-',
//         '-.--.': '(',
//         '-.--.-': ')',
//         '/': ' ',
//         '...---...': 'SOS'
//     };

//     const arr = morseCode.trim(' ').split(' ');
//     let resultArr = [];

//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (resultArr.length === 0 || resultArr[resultArr.length - 1] !== arr[i] || !!(resultArr[resultArr.length - 1])) {
//             resultArr.push(arr[i])
//         }
//     }

//     const result = resultArr.map(w => w !== '' ? MORSE_CODE[w] : ' ').join('');

//     return result;
// }

// console.log(decodeMorse("-.-.--"));


//  assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');



// const uniqueInOrder = iterable => {
//     const array = Array.isArray(iterable) ? iterable : iterable.split('');
//     return array.filter((f, i) => f !== array[i + 1])
// }

// console.log(uniqueInOrder('ABBCcAD'));

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]




// const narcissistic = value => {
//     const valueLength = String(value).length;
//     const result = value.toString().split('').reduce((a, c) => Math.pow(Number(c), valueLength) + a, 0);

//     return result === value ? true : false;
// }



// console.log(narcissistic(153));

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 - true
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 - false



// const toCamelCase = str => str.split(/[-_]/)
//     .map((w, i) => i === 0
//         ? w
//         : w.charAt(0).toUpperCase() + w.slice(1)).join('');




// console.log(toCamelCase("The_Stealth-Warrior"));

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"




// const findOutlier = integers => {
//     let parityDetection = 0;

//     for (let i = 0; i <= 2; i++) {
//         parityDetection += Math.abs(integers[i] % 2);
//     }

//     if (parityDetection >= 2) {
//         return integers.filter(f => !(f % 2))[0];
//     } else {
//         return integers.filter(f => !!(f % 2))[0];
//     }
// }



// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)




// const countBits = n => n.toString(2).split('').reduce((a, c) => Number(a) + Number(c), 0);





// console.log(countBits(4));

// assert.strictEqual(countBits(0), 0);
// assert.strictEqual(countBits(4), 1);
// assert.strictEqual(countBits(7), 3);
// assert.strictEqual(countBits(9), 2);
// assert.strictEqual(countBits(10), 2);




// const digitalRoot = n => {
//     let result;
//     const sumOfDigits = num => {
//         const sum = ("" + num).split("").map(Number).reduce((a, c) => a + c, 0);

//         return sum;
//     }

//     result = sumOfDigits(n);

//     while (result > 9) {
//         result = sumOfDigits(result);
//     }

//     return result;
// }



// console.log(digitalRoot(1321895));

// 16  -- > 1 + 6 = 7
// 942  -- > 9 + 4 + 2 = 15  -- > 1 + 5 = 6
// 132189  -- > 1 + 3 + 2 + 1 + 8 + 9 = 24  -- > 2 + 4 = 6
// 493193  -- > 4 + 9 + 3 + 1 + 9 + 3 = 29  -- > 2 + 9 = 11  -- > 1 + 1 = 2




// const spinWords = string => string.split(' ').map(w => w.length >= 5 ? [...w].reverse().join('') : w).join(' ');



// console.log(spinWords("This is another test"));

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"




// const solution = number => {
//     let result = 0;
//     for (let i = 1; i < number; i++) {
//         if (!(i % 3) || !(i % 5)) {
//             result += i;
//         }
//     }

//     return result;
// }

// console.log(solution(10));

// 3, 5




// const drawStairs = n => {
//     let result = "I".padStart(n, " ")

//     for (let i = 1; i < n; i++) {
//         result = "I".padStart(n - i, " ") + "\n" + result;
//     }

//     return result;
// }

// console.log(drawStairs(9));



// const elevator = (left, right, call) => {
//     const diffRight = right - call;
//     const diffLeft = left - call;

//     if (diffRight === diffLeft) {
//         return "right";
//     } else if (diffRight < 0 && diffLeft < 0) {
//         return diffRight > diffLeft ? "right" : "left";
//     } else if (diffRight === -1 && diffLeft !== 0) {
//         return "right"
//     } else if (diffRight >= 0 && diffRight < diffLeft) {
//         return "right"
//     } else if (diffLeft >= 0 && diffRight > diffLeft) {
//         return "left"
//     } else if (diffRight >= 0 && diffLeft < 0 && diffRight > diffLeft) {
//         return "right"
//     } else if (diffLeft >= 0 && diffRight < 0 && diffRight < diffLeft) {
//         return "left"
//     } else {
//         return "right"
//     }
// }


// console.log(elevator(1, 1, 2));

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"




// const formatMoney = amount => `$${amount.toFixed(2)}`;


// console.log(formatMoney(3));

// 3 needs to become $3.00

// 3.1 needs to become $3.10




// const generateRange = (min, max, step) => {
//     let result = [];
//     let i = min;

//     while (i <= max) {
//         result.push(i);
//         i += step;
//     }

//     return result;
// }

// console.log(generateRange(1, 15, 20));

// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]




// const nthEven = n => n * 2 - 2;

// console.log(nthEven(100));

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466




// const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a;



// // Test.assertEquals(solution('45', '1'), '1451');
// // Test.assertEquals(solution('13', '200'), '1320013');
// // Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
// // Test.assertEquals(solution('U', 'False'), 'UFalseU');

// console.log(solution('45', '1'));


// const stringy = size => {
//     let resultArr = [];

//     for (let i = 0; i < size; i++) {
//         i % 2 ? resultArr.push(0) : resultArr.push(1);
//     }

//     return resultArr.join('');
// }

// console.log(stringy(10));

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.




// const between = (a, b) => {
//     let result = [];

//     for (let i = a; i <= b; i++) {
//         result.push(i);
//     }

//     return result;
// }

// console.log(between(-2, 2));

// it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
// it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));




// const reverseWords = str => str.split(' ').reverse().join(' ');



// // assert.strictEqual(reverseWords("hello world!"), "world! hello")
// // assert.strictEqual(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
// // assert.strictEqual(reverseWords("foobar"), "foobar")
// // assert.strictEqual(reverseWords("kata editor"), "editor kata")
// // assert.strictEqual(reverseWords("row row row your boat"), "boat your row row row")
// // assert.strictEqual(reverseWords(""), "")

// console.log(reverseWords(""));


// const litres = time => Math.floor(time * 0.5);



// // assert.strictEqual(litres(2), 1, 'should return 1 litre');
// // assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
// // assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
// // assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
// // assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
// // assert.strictEqual(litres(1787), 893, 'should return 893 litres');
// // assert.strictEqual(litres(0), 0, 'should return 0 litres');


// console.log(litres(0));

// const eachCons = (array, n) => {
//     let result = [];

//     for (let i = 0; i <= array.length - n; i++) {
//         result.push([...array.slice(i, n + i)])
//     }

//     return result;
// }

// console.log(eachCons([1,2,3,4], 3));

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]




// const isVow = a => a.map(el => {
//     switch (el) {
//         case 97: return 'a';
//         case 101: return 'e';
//         case 105: return 'i';
//         case 111: return 'o';
//         case 117: return 'u';

//         default: return el;
//     }
// })



// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));

// a = 97
// e = 101
// i = 105
// o = 111
// u = 117

// Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);




// const differenceInAges = ages => {
//     let result = [];

//     ages.sort((a, b) => a - b);
//     result = [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]];

//     return result;
// }

// console.log(differenceInAges([57, 99, 14, 32]));

// Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
// Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);




// const sumOfDifferences = arr => {
//     arr.sort((a, b) => b - a);
//     let result = 0;

//     for (let i = 0; i < arr.length - 1; i++) {
//         let diff = arr[i] - arr[i + 1];
//         result = result + diff;
//     }

//     return result;
// }



// console.log(sumOfDifferences([2, 1, 10]));


// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// it("sumOfDifferences([1, 2, 10]", function () {
//     assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
// });

// it("sumOfDifferences([-3, -2, -1])", function () {
//     assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);



// const multipleOfIndex = array => array.filter((f, i) => {
//     return i === 0 && f === 0
//         ? true
//         : i !== 0 && !(f % i)
//             ? true
//             : false
// })

// console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]




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
