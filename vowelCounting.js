
const readline = require('readline-sync');
const userInput = require('./userInput');



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

exports.performOneVowelCountingCalculation = function(){


    inputString = userInput.getStringInputWithPrompt('Please enter a string')
    VowelCount = countVowels(inputString);
    printVowelCount(VowelCount);

    return 0;
}