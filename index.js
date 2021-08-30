const readline = require('readline-sync');

// ===========================================
// Get instructions from user

console.log('Welcome to the calculator!');
console.log('===========================');

console.log('Please enter the operator (+ - * /)');
const operator = readline.prompt();

console.log('How many numbers to you want to ' + operator + '?');
const n_numbers = readline.prompt();

var numbers = Array(n_numbers);

for(let i = 0; i<n_numbers; i++){
    console.log('Please enter number ' + (i+1));
    let response = readline.prompt();
    numbers[i] = parseFloat(response);
}


// ===========================================
// Run calculator




var answer = numbers[0];

switch (operator) {
    case '+':
        for(i = 1; i<n_numbers; i++){
            answer = answer + numbers[i];
        }           
        break;
    case '-':
        for(i = 1; i<n_numbers; i++){
            answer = answer - numbers[i];
        }  
        break;
    case '*':
        for(i = 1; i<n_numbers; i++){
            answer = answer * numbers[i];
        }  
        break;
    case '/':
        for(i = 1; i<n_numbers; i++){
            answer = answer / numbers[i];
        }  
        break;

}



console.log('The answer is ' + answer);