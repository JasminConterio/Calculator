
const readline = require('readline-sync');

exports.getStringInputWithPrompt = function(prompt){
    console.log(prompt);
    const response = readline.prompt();
    return response;
}

exports.getNumberInputWithPrompt= function(prompt){
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