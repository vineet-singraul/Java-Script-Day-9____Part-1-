/*Write a JavaScript code to accept the birth year from the user and calculate and print his age. Also print whether the user can vote or not . Make sure if the age turns out to be 0 or negative your code prompts the user to input his birth year again until the age comes positive*/

const prompt = require('prompt-sync')();
let y
do
{
    let userInput = prompt("Enter The Your Birth Year:")
    userInput=parseInt(userInput)
    let current_year=2024
    if(userInput>0)
    {
        let age = current_year-userInput
        if(age>=18)
        {
            console.log("You Are Vailid For Voating",+age)
        }
        else
        {
            console.log("You Are Not Vailid For Voating:",+age) 
        }
        break
    }
    else
    {
        console.log("Plase Give Your Vailid DOB:",+userInput)
        y = prompt("Do you want to try again? (Y/N): ");
    }
    } while (y.toUpperCase() === 'Y');
