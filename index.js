const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('===========================');

console.log('Please enter the operator (+ - * /)');
const operator = readline.prompt();

console.log('Enter the first number');
const response1 = readline.prompt();
const num1 = parseFloat(response1);
/* 
In their example, they would do 

num1 = +response

The unary plus tries to convert the operand to a number
*/

console.log('Enter the second number');
const response2 = readline.prompt();
const num2 = parseFloat(response2);

var answer;

switch (operator) {
    case '+':
        answer = num1 + num2;
        break;
    case '-':
        answer = num1 - num2;
        break;
    case '*':
        answer = num1*num2;
        break;
    case '/':
        answer = num1/num2;
        break;

}



console.log('The answer is ' + answer);