const readline = require('readline-sync');

printWelcomeMessage();

// continue calculations until the using wants to calculate 0 arguments
do
    performOneCalculation();
while(n_args)   




function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('===========================');
}


function performOneCalculation(){
    // get calculation instructions
    operator = inputOperator();
    n_args = inputNargs();

    if (n_args){
        args = inputArgs();
        // run calculation
        var answer = runCalculation();
        //output answer
        console.log('The answer is ' + answer);
    }

    return n_args;
}


function inputOperator(){
    console.log('Please enter the operator (+ - * /)');
    const op = readline.prompt();

    return op;
}

function inputNargs(){
    console.log('How many arguments to you want to ' + operator + '?');
    const n_numbers = inputNumber();

    return n_numbers;
}

function inputArgs(){
    var numbers = Array(n_args);

    for(let i = 0; i<n_args; i++){
        numbers[i] = inputNumber();
    }

    return numbers;
}

function inputNumber(){
    let number;
    do {
        console.log('Please enter a number:');
        const response = readline.prompt();
        number = +response;
        if(isNaN(number)){
            console.log('Invalid number!');
        }
    }
    while(isNaN(number))
    

    return number;
    

    //const number = parseFloat(response);

    
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

    return ans
}

