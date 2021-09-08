const readline = require('readline-sync');


function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('===========================');
}


function getStringInputWithPrompt(prompt){
    console.log(prompt);
    const response = readline.prompt();
    return response;
}

function getNumberInputWithPrompt(prompt){
    let response;
    do {
        console.log(prompt);
        const inputStr = readline.prompt();
        response = +inputStr;
        if(isNaN(response)){
            console.log('Invalid number!');
        }
    }
    while(isNaN(response))
    return response;
}

function inputArgs(){
    var numbers = Array(n_args);
    for(let i = 0; i<n_args; i++){
        numbers[i] = getNumberInputWithPrompt(`Please enter number ${i+1}:`);
    }
    return numbers;
}

function getOperator(){
    operator = getStringInputWithPrompt('Please enter the operator (+ - * /)');
    const validOperators = ['+','-','*','/'];
    if (!(validOperators.includes(operator))){
        console.log('Invalid operator! Please try again.')
        return 0;
    }
    return operator;
}

function runCalculation(){
    var ans = args[0];
    for(i=1; i<n_args; i++){
        switch (operator) {
            case '+':
                ans = ans + args[i];
                break;
            case '-':
                ans = ans - args[i];
                break;
            case '*':
                ans = ans*args[i];
                break;
            case '/':
                ans = ans/args[i];
        }
    }
    return ans;
}

function performOneCalculation(){
    // get operator, check it is valid  
    do 
        operator = getOperator();
    while(!(operator))
    // get arguments, check they are valid, run calculation, print answer
    n_args = getNumberInputWithPrompt(`How many arguments to you want to ${operator}? (0 to quit)`);
    if (n_args){
        args = inputArgs();
        var answer = runCalculation();
        console.log('The answer is ' + answer);
    }
    return n_args;
}


// =====================================================================
// Main code
// =====================================================================

printWelcomeMessage();
// continue calculations until the using wants to calculate 0 arguments
do
    performOneCalculation();
while(n_args) 