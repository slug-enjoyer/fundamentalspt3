// script for part 3 of the java script fundamentals assignment for ODIN project

// //1. func called add7 takes one number and adds 7 to it
// let num1 = +prompt("enter a number"); // asks user for number, changes input from string to integer
// let add7 = (x) => x+7; //creates an arrow func to add 7 to whatever number is passed to x
// console.log(add7(num1));//sends num1 to the func add7 and prints result to console

// //2. func called multiply takes 2 numbers and returns their product
// let num2 = +prompt("enter another number plz");
// let multiply = (x,y) => x * y; // multiplies x and y together
// console.log(multiply(num1,num2));

// //3. func called capitalize takes user provided string and then returns it with only
// // the first letter capitalized. This func should work on strings with all forms of case.
// let userString = prompt("please enter a short string of text"); //asks user to enter a string
// function capitalize (usrStr) { //creates a func named capitalize that takes an argument named usrString

// //creates a variable that slices the first letter out of usrString
// //and then changes it to upper case
//     let firstLetter = (usrStr.slice(0,1)).toUpperCase(); 

// //creates a variable that contains the rest of the user inputted string
//     let restOfString = usrStr.slice(1);   
// //creates a variable that contains the concatination of the last two variables
//     const newString = `${firstLetter}${restOfString}`; 
// //returns the concatinated string
//     return newString;
//     };

//4. func called lastLetter takes a given string and returns the last letter of given string. 
//will need to get user input, find the last character in the string, determine if its a letter,
//if it is not a letter it needs to icrement and then go to the next character until it finds
//a letter, and finally output that letter to the console.log
    // let userString2 = prompt("Please type a short string of words");

    // function lastLetter (usrStr){
    //     let intLetterPosition = usrStr.length;

    // }

    // console.log(lastLetter(userString2));

//4. func called lastLetter takes a given string and returns the last letter of given string. 
//will need to get user input, find the last character in the string, determine if its a letter,
//if it is not a letter it needs to icrement and then go to the next character until it finds
//a letter, and finally output that letter to the console.log
let userString2 = prompt("Please type a short string of words");

function lastLetter (usrStr){
    let intLetterPosition = usrStr.length - 1;
    let endChar = usrStr.slice(intLetterPosition);
    return endChar;
}

console.log(lastLetter(userString2));
