// fectorial
 
const prompt = require('prompt-sync')();
let fec=1
let num
num = prompt("Enter the number:")
num = parseInt(num)
do {
    fec=fec*num
    num=num-1
} while (num!=0);
console.log("The Fectorial Is=",+fec)  