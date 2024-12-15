// Write a JavaScript code to continuously accept numbers from the user and as 
//soon as 0 is entered show the sum and average of all the numbers inputted by the user


const prompt = require('prompt-sync')();
let sum=0
let num
do {
    num = prompt("Enter the number:")
    num = parseInt(num)
    sum=sum+num
} while (num!=0);
console.log("The Sum Is=",+sum) 