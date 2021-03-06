/**
 * @link https://www.acmicpc.net/problem/18870
 * @since 2021/06/13
 */

/**
 * 못품...이유모름...
 */

//  const fs = require('fs');
//  const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//  const input = [5, '2 4 -10 4 -9'];
//  const input = [5, '1000 999 1000 999 1000 999'];


const readline = require('readline');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
const input = [];
    
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {});
            
Q18870(input);
function Q18870([, strArr]) {
    let result = '';

    const numArr = strArr.split(' ').map(Number);

    const sortedArr = Array.from(new Set(numArr)).sort((a, b) => {
        return a - b;
    });

    for(let i = 0; i < numArr.length; i++) {
        const index = sortedArr.findIndex((value) => value === numArr[i]);
        result += index + ' ';
    }

    console.log(result);

    process.exit();
}