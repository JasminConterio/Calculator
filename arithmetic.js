
const readline = require('readline-sync');
const userInput = require('./userInput');




function inputArgs(){
    var numbers = Array(n_args);
    for(let i = 0; i<n_args; i++){
        numbers[i] = userInput.getNumberInputWithPrompt(`Please enter number ${i+1}:`);
    }
    return numbers;
}

function getOperator(){
    operator = userInput.getStringInputWithPrompt('Please enter the operator (+ - * /)');
    const validOperators = ['+','-','*','/'];
    if (!(validOperators.includes(operator))){
        console.log('Invalid operator! Please try again.');
        return 0;
    }
    return operator;
}


function runCalculation(){
    switch (operator){
        case '+':
            var ans = args.reduce(function(accumulator, currentValue) {return accumulator + currentValue} );
            break;
        case '-':
            var ans = args.reduce(function(accumulator, currentValue) {return accumulator - currentValue} );
            break;    
        case '*':
            var ans = args.reduce(function(accumulator, currentValue) {return accumulator * currentValue} );
            break;
        case '/':
            var ans = args.filter(function(item) {return item != 0;}).reduce(function(accumulator, currentValue) {return accumulator / currentValue} );
            break;  

    }

    return ans
    
}

exports.performOneArithmeticCalculation = function(){
    // get operator, check it is valid  
    do 
        operator = getOperator();
    while(!(operator))
    // get arguments, check they are valid, run calculation, print answer
    n_args = userInput.getNumberInputWithPrompt(`How many arguments to you want to ${operator}?`);
    if (n_args){
        args = inputArgs();
        var answer = runCalculation();
        console.log('The answer is ' + answer);
    }
    return n_args;
}
