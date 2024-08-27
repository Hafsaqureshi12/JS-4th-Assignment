// 1. Function to display the current date & time in the browser
function tellTime() {
    var now = new Date();
    document.getElementById("currentTime").innerHTML = "Current Time: " + now;
}
tellTime();

// 2. Function to greet the user using first & last name
function greetUser(event) {
    event.preventDefault(); 
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var fullName = firstName + " " + lastName;
    var greeting = "Hello, " + fullName + "! Welcome!";
    document.getElementById("greetingMessage").textContent = greeting;
}

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function sumoftwonum(event) {
    event.preventDefault();
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var total = Number(number1) + Number(number2);
    document.getElementById("Result").textContent = "Sum: " + total; 
  return sum;
}

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculateResult(event) {
    event.preventDefault();  // Prevent form submission/reload

    // Get the values from the form inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    var result;

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero!";
            }
            break;
        default:
            result = "Invalid operator!";
    }

    // Display the result
    document.getElementById("result").textContent = "Result: " + result;

    return false; // Return false to prevent form submission
}

// 5. Write a function that squares its argument.

function calculatesquare() {
    var number = parseFloat(document.getElementById("number").value);
    var square = number * number;
    document.getElementById("RESULT").textContent  = "Result: " + square;
}

// 6. Write a function that computes factorial of a number.

function calculateFactorial() {
    var number = parseInt(document.getElementById("number").value);
    if (number < 0) {
        document.getElementById("result").textContent = "Factorial is not defined for negative numbers.";
        return;
    }
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("result").textContent = "Factorial: " + factorial;
}

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function displayCounting() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    start = Number(start);
    end = Number(end);
    if (isNaN(start) || isNaN(end) || start > end) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers where start is less than or equal to end.';
        return;
    }
    var result = '';
    for (var i = start; i <= end; i++) {
        result += i + ' ';
    }
    document.getElementById('ResulT').innerHTML = result;
}

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

function calculateHypotenuse() {
    var base = document.getElementById('base').value;
    var perpendicular = document.getElementById('perpendicular').value;

    base = Number(base);
    perpendicular = Number(perpendicular);
    function calculateSquare(x) {
        return x * x;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    document.getElementById('resuLt').innerText = "The hypotenuse is: " + hypotenuse;
}

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

function calculateArea(width, height) {
    return width * height;
}
// Calculate area using values
function calculateAreaUsingValues() {
    let area = calculateArea(5, 10); // Pass values directly
    document.getElementById('resultValues').innerText = "Area (using values): " + area;
}
// Calculate area using variables
function calculateAreaUsingVariables() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;

    // Convert input values to numbers
    width = Number(width);
    height = Number(height);

    let area = calculateArea(width, height); // Pass variables
    document.getElementById('resultVariables').innerText = "Area (using variables): " + area;
}

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

  function checkPalindrome() {
    let str = document.getElementById('inputString').value;
    str = str.replace(/\s+/g, '').toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    
    if (str === reversedStr) {
        document.getElementById('reSult').innerText = "Yes, it's a palindrome!";
    } else {
        document.getElementById('reSult').innerText = "No, it's not a palindrome.";
    }
}

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.

function capitalizeWords() {
    let str = document.getElementById('inputString').value;
    // Split the string into words, capitalize each word, and join them back
    let capitalizedStr = str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    document.getElementById('resUlt').innerText = capitalizedStr;
}

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.

function findLongestWord() {
    let str = document.getElementById('inputString').value;
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        // If the current word is longer than the longest word, update the longest word
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    document.getElementById('rEsult1').innerText = "The longest word is: " +longestWord;
}

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.

function countOccurrences() {
    let str = document.getElementById('inputString').value;
    let letter = document.getElementById('inputLetter').value;
    if (letter.length !== 1) {
        document.getElementById('result').innerText = "Please enter exactly one letter.";
        return;
    }
    let count = 0;
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }
    document.getElementById('REsult').innerText = "The letter '" + letter + "' occurs " + count + " times.";
}

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.

function calcCircumference() {
    let radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('circumferenceResult').innerText = "Please enter a valid radius.";
        return;
    }
    let circumference = 2 * Math.PI * radius;
    document.getElementById('circumferenceResult').innerText = "The circumference is " + circumference.toFixed(2);
}
function calcArea() {
    let radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('areaResult').innerText = "Please enter a valid radius.";
        return;
    }
    let area = Math.PI * radius * radius;
    document.getElementById('areaResult').innerText = "The area is " + area.toFixed(2);
}









