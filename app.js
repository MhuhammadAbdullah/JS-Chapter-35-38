// QUESTION: 1

// function showDateTime() {
//     var now = new Date();
//     var dateTimeString = now.toLocaleString();
//     document.write("Current Date and Time: " + dateTimeString);
// }

// showDateTime();


// QUESTION: 2

// function greeting() {
//     var firstName = prompt("Enter your first name")
//     var laststName = prompt("Enter your last name")
//     document.write("Welcome! : " + firstName + " "
//         + laststName)
// }

// greeting()


// QUESTION: 3

// function addTwoNumbers() {
//     var num1 = parseFloat(prompt("Enter a number:"));
//     var num2 = parseFloat(prompt("Enter a number:"));

//     var sum = num1 + num2;

//     document.write(num1 + " + " + num2 + " = " + sum);
// }

// addTwoNumbers();

// QUESTION: 4

// function calculator(num1, num2, operator) {
//     var result;

//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2
//             break;
//         default:
//             return "Error: Invalid operator";
//     }

//     return result;
// }


// var num1 = prompt("Enter a number");
// var num2 = prompt("Enter a number");
// var operator = prompt("Enter an operator (+, -, *, /)");

// var result = calculator(num1, num2, operator);

// console.log("The result is: " + result);

//QUESTION 4

// function calc() {
//     if(arguments[2]=="+"){
//         console.log(arguments[0]+arguments[1]);
//     }
//     else if(arguments[2]=="-"){
//         console.log(arguments[0]-arguments[1]);
//     }
//     else if(arguments[2]=="*"){
//         console.log(arguments[0]*rguments[1]);
//     }
//     else if(arguments[2]=="/"){
//         console.log(arguments[0]/arguments[1]);
//     }
//     else if(arguments[2]=="%"){
//         console.log(arguments[0]%arguments[1]);
//     }
// }

// var a=+prompt("Enter  num")
// var b=+prompt("Enter  num2")
// var c=prompt("Enter  operator")

// calc(a,b,c)


//QUESTION 5

// function square(num) {
//     return num * num;
// }

// var number = prompt("Enter a number to square:");
// var result = square(parseFloat(number));

// console.log("The square of " + number + " is: " + result);



//QUESTION 6

// function factorial(num) {
//     if (num < 0) {
//         return "Error: Factorial is not defined for negative numbers.";
//     } else if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }


// var number = prompt("Enter a number to compute its factorial:");
// var result = factorial(parseInt(number));
// console.log("The factorial of " + number + " is: " + result);





//QUESTION 7

// function displayCounting(start, end) {
//     if (start > end) {
//         return "Error: Start number should be less than or equal to end number.";
//     }

//     var counting = "";
//     for (var i = start; i <= end; i++) {
//         counting += i + " ";
//     }
//     return counting.trim();
// }

// var startNumber = prompt("Enter the start number:");
// var endNumber = prompt("Enter the end number:");
// var countingResult = displayCounting(parseInt(startNumber), parseInt(endNumber));

// console.log("Counting from " + startNumber + " to " + endNumber + ": " + countingResult);



//QUESTION 8

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }


//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);


//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
//     return hypotenuse;
// }


// var base = prompt("Enter the length of the base:");
// var perpendicular = prompt("Enter the length of the perpendicular:");
// var hypotenuseResult = calculateHypotenuse(parseFloat(base), parseFloat(perpendicular));

// console.log("The length of the hypotenuse is: " + hypotenuseResult);

//QUESTION 9


// function calculateArea(width, height) {
//     return width * height;
// }


// var areaValue = calculateArea(5, 10);
// console.log("Area (using values): " + areaValue);


// var width = 7;
// var height = 3;
// var areaVariable = calculateArea(width, height);
// console.log("Area (using variables): " + areaVariable);

//QUESTION 10

// function isPalindrome(str) {

//     let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }


// let testString = "Madam";
// console.log(`Is "${testString}" a palindrome? ` + isPalindrome(testString));


//QUESTION 11


// function capitalizeFirstLetter(str) {
//     return str.split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }

// var exampleString = 'the quick brown fox';
// var capitalizedString = capitalizeFirstLetter(exampleString);
// console.log("Capitalized String: " + capitalizedString);


//QUESTION 12

// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// const exampleString = 'Web Development Tutorial';
// const longestWord = findLongestWord(exampleString);
// console.log(`The longest word is: '${longestWord}'`);


//QUESTION 13



// function countLetterOccurrences(str, letter) {
//     let count = 0;
//     for (let char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// let sampleString = 'JSResourceS.com';
// let letterToCount = 'o';
// let occurrences = countLetterOccurrences(sampleString, letterToCount);
// console.log(`The letter "${letterToCount}" occurs ${occurrences} times in "${sampleString}".`);




//QUESTION 14


// function calcCircumference(radius) {
//     const pi = Math.PI;
//     const circumference = 2 * pi * radius;
//     console.log("The circumference is " + circumference.toFixed(2));
// }


// function calcArea(radius) {
//     const pi = Math.PI;
//     const area = pi * Math.pow(radius, 2);
//     console.log("The area is " + area.toFixed(2));
// }

// let radius = 5;
// calcCircumference(radius);
// calcArea(radius);
