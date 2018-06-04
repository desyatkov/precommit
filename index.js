const chalk = require('chalk');
const log = console.log;

const checkStatus =  status => {
    if(status == true) {
        log( chalk.bgHex('#128731').keyword('black').bold(' Success! ') );
        process.exitCode = 0;
    } else {
        log( chalk.bgHex('#ffa500').keyword('black').bold(' Error! ') );
        process.exitCode = 2; 
    }
}

checkStatus(true)