//  Arithmetic operators 
// this is prompt which user input the values
var x = prompt("enter the first number :");
var y = prompt("enter the second number : ");

// this is using prompt this used string but using parseint it convert values into numbers
var num1 = parseInt(x);
var num2 = parseInt(y);

//  this is variables which Arithmetic operators
var sum = num1 + num2;
var diff = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

// results display 
var
    Arithmetic = "x: " + x + "<br>";
Arithmetic += "y: " + y + "<br><br>";
Arithmetic += "Sum: " + sum + "<br>";
Arithmetic += "Difference: " + diff + "<br>";
Arithmetic += "Product: " + mul + "<br>";
Arithmetic += "Quotient: " + div + "<br>";
Arithmetic += "Modulus: " + mod + "<br>";


// comparsion operatos
// this is prompt which user input the values
var xInput = prompt("Enter a number : ");
var yInput = prompt("Enter another number : ");

// Parse the input values to numbers
var x = parseFloat(xInput);
var y = parseFloat(yInput);

//  this is variables which Comparision operators
var isEqual = xInput == yInput;
var isNotEqual = xInput != yInput;
var isGreater = xInput > yInput;
var isLess = xInput < yInput;
var isGreaterOrEqual = xInput >= yInput;
var isLessOrEqual = xInput <= yInput;

// results display
var Comparsion = "x: " + xInput + "<br>";
Comparsion += "y: " + yInput + "<br><br>"
Comparsion += "x == y (" + xInput + " == " + yInput + "): " + isEqual + "<br>";
Comparsion += "x != y (" + xInput + " != " + yInput + "): " + isNotEqual + "<br>";
Comparsion += "x > y (" + xInput + " > " + yInput + "): " + isGreater + "<br>";
Comparsion += "x < y (" + xInput + " < " + yInput + "): " + isLess + "<br>";
Comparsion += "x >= y (" + xInput + " >= " + yInput + "): " + isGreaterOrEqual + "<br>";
Comparsion += "x <= y (" + xInput + " <= " + yInput + "): " + isLessOrEqual + "<br>";

// 

var a = parseFloat(prompt("Enter a number (a): "));
var b = parseFloat(prompt("Enter another number (b): "));

var isBothPositive = a > 0 && b > 0;
var isEitherNegative = a < 0 || b < 0;
var maxNumber = a > b ? a : b;
var minNumber = a < b ? a : b;

var resultHTML = "a: " + a + "<br>";
resultHTML += "b: " + b + "<br><br>";

resultHTML += "a > 0 && b > 0: " + (isBothPositive ? "true" : "false") + "<br>";
resultHTML += "a < 0 || b < 0: " + (isEitherNegative ? "true" : "false") + "<br>";
resultHTML += "Max number: " + maxNumber + "<br>";
resultHTML += "Min number: " + minNumber + "<br>";

