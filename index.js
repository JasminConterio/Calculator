
const readline = require('readline-sync');
const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');


function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('===========================');
}

function getCalculationMode(){
    do {
    mode = userInput.getNumberInputWithPrompt(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel counting
    0) Quit`);
    if (![0,1,2].includes(mode)){
        console.log(`Mode ${mode} is invalid!`)
    }
    } while(![0,1,2].includes(mode))
    return mode;
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
        arithmetic.performOneArithmeticCalculation();
    }
    else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCounting.performOneVowelCountingCalculation();
    }
    
} while(calculationMode) 