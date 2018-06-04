const chalk = require('chalk');
const log = console.log;

const checkStatus =  status => {
    if(status == true) {
        process.exitCode = 0;
    } else {
        log( `🚑  ${chalk.bgHex('#ffa500').keyword('black').bold(' GIT COMMIT ERROR! ')}` );
        process.exitCode = 2; 
    }
}

checkStatus(true);