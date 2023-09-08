// var declare
var num1 = 3;
var num2 = 5;

// Calculate the sum
var sum = num1 + num2;

// result
document.write("<h1>CALCULATIONS</h1>");
document.write("<h3>Sum of " + num1 + " and " + num2 + " is: " + sum + "</h3>");

// Subtraction
var sum = num1 - num2;

// result
document.write("<h3>Sub of " + num1 + " and " + num2 + " is: " + sum + "</h3>");

// division
var sum = num1 / num2;

// results
document.write(
  "<h3>Division of " + num1 + " and " + num2 + " is: " + sum + "</h3>");

// Multiplication
var sum = num1 * num2;

// results
document.write(
  "<h3>Multiplication of " + num1 + " and " + num2 + " is: " + sum + "</h3>");




// a. Declare a variable
var myVariable;

// b. Show the value of the variable after declaration
document.write("<h1> JS MATHEMATICS EXPRESSIONS </h1>");
document.write("<h3>Value after variable declaration is: " + myVariable + "</h3>");

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the initial value of the variable
document.write("<h3>Initial value: " + myVariable + "</h3>");

// e. Increment the variable
myVariable++;

// f. Show the value of the variable after increment
document.write("<h3>Value after increment is: " + myVariable + "</h3>");

// g. Add 7 to the variable
myVariable += 7;

// h. Show the value of the variable after addition
document.write("<h3>Value after addition is: " + myVariable + "</h3>");

// i. Decrement the variable
myVariable--;

// j. Show the value of the variable after decrement
document.write("<h3>Value after decrement is: " + myVariable + "</h3>");

// k. Show the remainder after dividing the variable's value by 3
var remainder = myVariable % 3;

// l. Show the remainder
document.write("<h3>The remainder is: " + remainder + "</h3>");


// Storing ticket price
var ticketprice = 600;
var currencytype = ("PKR")

// calculating ticket cost
var numberoftickets = 5;
var totalcost = ticketprice * numberoftickets;

// results
document.write("<h1> COSTING OF TICKETS </h1>");
document.write("<h3>The cost of buying " + numberoftickets + " movie tickets is: " + totalcost + currencytype + " </h3>");

// a. Storing Celsius temperature
var celsiusTemperature = 25;

// b. Conversion to Fahrenheit & output
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write("<h1> TEMPERATURE CONVERTER <h1>");
document.write("<h3>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</h3>");

// c. Storing Fahrenheit temperature
var fahrenheitTemperature2 = 70;

// d. Conversion to Celsius & output
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write("<h3>" +fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C </h3>");

// a. price of item1
var item1 = 650;

// b. Price of item2
var item2 = 100;

// c. Ordered quantity of item1
var QuantityItem1 = 3;

// d. Ordered quantity of item2
var QuantityItem2 = 7; 

// Shipping charges
var Shipping = 100;

// total amount of items

var totalitem1 = item1 * QuantityItem1;
var totalitem2 = item2 * QuantityItem2;

var totalbill = totalitem1 + totalitem2 + Shipping;

// Results
document.write("<h1> SHOPPING CART </h1> ");
document.write("<h3> Price of Item 1 is " + item1 + "</h3>");
document.write("<h3> Quantity of Item 1 is " + QuantityItem1 + "</h3>"); 
document.write("<h3> Price of Item 2 is " + item2 + "</h3>");
document.write("<h3> Quantity of Item 2 is " + QuantityItem2 + "</h3>"); 
document.write("<h3> Shipping Charges " + Shipping + "</h3>");
document.write("<h3> Total Cost of your Order is " + totalbill + "</h3>");



// Total marks
var totalmarks = 980;
document.write("<h1> MARKS SHEET </h1>")
document.write("<h3> Total Marks: " + totalmarks + "</h3>");

// obtained marks
var obtainedmarks = 804;
document.write("<h3> Marks obtained: " + obtainedmarks + "</h3>");

// results
var Percentage = obtainedmarks / totalmarks * 100;
document.write("<h3> Percentage: " + Percentage + "%</h3>");

// Quantity of Foreign Currencies
var USD = 10;
var Riyal = 25;

// Exchange Rate in PKR
var usdtopkr = 305;
var riyaltopkr = 81.32;

// Amount after conversion & total
var totalofusd = USD * usdtopkr;
var totalofriyal = Riyal * riyaltopkr;
var totalofcurrencies = totalofusd + totalofriyal;

// Results
document.write("<h1> CURRENCY IN PKR </h1>")
document.write("<h3> Total Currency in PKR: " + totalofcurrencies + "</h3>");

// Arithmetic calculation
var initialnum = 20;
var calculation = ((initialnum + 5) * 10) / 2;

// Results
document.write("<h1> ARITHMETIC CALCULATIONS </h1>")
document.write("<h3> Result after performing all calculations: " + calculation + "</h3>");

// Age Calculator
var currentyear = 2023;
var birthyear = 2002;
var age = currentyear - birthyear;

// Results
document.write("<h1> AGE CALCULATOR </h1>")
document.write("<h3> Current Year: " + currentyear + "</h3>");
document.write("<h3> Birth Year: " + birthyear + "</h3>");
document.write("<h3> Age: " + age + "</h3>");

// Geometrizer
var radius = 20;
var PI = 3.142;
var circumference = 2 * PI * radius;
var area = PI * (radius * radius);

// Results
document.write("<h1> GEOMETRIZER </h1>")
document.write("<h3> Radius of a Circle: " + radius + "</h3>")
document.write("<h3> Circumference: " + circumference + "</h3>");
document.write("<h3> Area: " + area + "</h3>");

// Life time supply
var snack = ("OREO");
var Currentage = 21;
var estimatedage = 70;
var amountofsnacks = 5;
var neededsnacks = (estimatedage - Currentage) * amountofsnacks;

// Results
document.write("<h1> LIFE TIME SNACKS SUPPLY </h1>")
document.write ("<h3> Favourite Snack " + snack + "</h3>")
document.write ("<h3> Current Age: " + Currentage + "</h3>")
document.write ("<h3> Estimated Maximum Age:" + estimatedage + "</h3>")
document.write ("<h3> Amount of Snacks Per day" + amountofsnacks + "</h3>")
document.write("<h3> You will need " + neededsnacks + " to last you until the ripe old age of " + estimatedage + "</h3>")