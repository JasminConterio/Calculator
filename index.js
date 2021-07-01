const readline = require('readline-sync');

console.log('Welcome to the calculator!');

// Get 2 numbers from the user, convert to float, multiply and pring
console.log('Enter a number to multiply:');
// const response = readline.prompt(); 
// Instructions suggest using a const, but this way we don't need separate variables for each user input
var response = readline.prompt();
num1 = parseFloat(response);

console.log('Enter a second number to multiply:');
response = readline.prompt();
num2 = parseFloat(response);

answer = num1*num2;

console.log('The product of you numbers is ' + answer)