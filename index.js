const readline = require('readline-sync');


function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('===========================');
}

function getCalculationMode(){
    mode = getNumberInputWithPrompt(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel counting
    0) Quit`);
    return mode;
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

function performOneArithmeticCalculation(){
    // get operator, check it is valid  
    do 
        operator = getOperator();
    while(!(operator))
    // get arguments, check they are valid, run calculation, print answer
    n_args = getNumberInputWithPrompt(`How many arguments to you want to ${operator}?`);
    if (n_args){
        args = inputArgs();
        var answer = runCalculation();
        console.log('The answer is ' + answer);
    }
    return n_args;
}


function countLetter(inputString, LetterToCount){
    let count = 0;
    let position = inputString.indexOf(LetterToCount);
    while (position !== -1){
        count++;
        position = inputString.indexOf(LetterToCount, position + 1)
    }
    return count;
}

function countVowels(inputString){
    var VowelCount = {A: 0, E: 0, I: 0, O: 0, U: 0};
    let countUpper = 0;
    let countLower = 0;
    VowelKeys = Object.keys(VowelCount);
    for(i=0; i<VowelKeys.length; i++){
        countUpper = countLetter(inputString,VowelKeys[i]);
        countLower = countLetter(inputString,VowelKeys[i].toLowerCase());
        VowelCount[VowelKeys[i]] = countUpper + countLower;
    }
    return VowelCount;
}

function printVowelCount(VowelCount){
    VowelKeys = Object.keys(VowelCount);
    console.log('');
    console.log('The vowel counts are:');
    for(i=0; i<VowelKeys.length; i++){
        console.log(`${VowelKeys[i]}: ${VowelCount[VowelKeys[i]]}`);
    }
    console.log('');
}

function performOneVowelCountingCalculation(){
    //console.log('Vowel counting mode under development')
    

    inputString = getStringInputWithPrompt('Please enter a string')
    VowelCount = countVowels(inputString);
    printVowelCount(VowelCount);

    return 0;
}

// =====================================================================
// Main code
// =====================================================================
const ARITHMETIC_MODE = 1;
const VOWEL_COUNTING_MODE = 2;
var calculationMode;

printWelcomeMessage();
// continue calculations until the using wants to calculate 0 arguments
do{
    calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    }
    else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
    
} while(calculationMode) 