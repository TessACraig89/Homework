// What is the difference between interpolation and concatenation?
// Give an example of each.

//String concatenation works with two strings and is used to combine two strings together

// 'Hello'+'World'

//String interpolation is used to insert a variable into a string

// var x = 'World'
//
// `Hello ${x}`


// What does the acronym DRY stand for?
// Why should we pay attention to it?
// What programming tools have we learned to write DRY code?

//DRY stands for Don't Repeat Yourself

// Using the provided variable definitions,
// replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
// Test your answers by using console.log in front of each expression in your answer file.
//
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// a < b;
// c > d;
// 'Name' == 'Name';
// a + b == c;
// a * a == d;
// e == 'Kevin';
// 48 != '48';

// while (true) {
// console.log('Do not run this loop');
// }

//This is an infinite loop

// const runProgram = true;
//
// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }

// This program will break because a const cannot be changed


// let letters = "A";
// let i = 0;
//
// while (i < 20) {
// 	letters += "A";
// 	i++;
// }
//
// console.log(letters);

// This program will output 'A' 20 times in a row

// A for loop performs the same operation as a while loop.
// But what are the key differences, if any? What are the similarities?

// A while loop can be used to loop through instances while a certain condition is true or false
// A for loop can be used to specifically loop through instances with an iterator, similar to how a while
// can use an iterator with an incrementor '++'

// function forLoop(){
//   for(let i=0; i<=999; i++){
//     console.log(i);
//   }
// }
// forLoop()

// for (let i=0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// What are the three components of the control panel? Each component is separated by a semicolon ;.
//
// Write your answers as comments in the file.
//
// The first part of the control panel is: declaring the iterator variable
// The second part of the control panel is: Comparing the iterato variable to the maximum value of iterations variable
// The third part of the control panel is: The incrementor will increase the iterator until it reaches the maximum value variable

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse.
// Console.log a countdown from 999 to 0.
//
// function reverseLoop(){
//   for(let i=999; i>=0; i--){
//     console.log(i);
//   }
// }
// reverseLoop()

// Write a for loop that uses interpolation to send a message to the console as well as the current value of i.
//
// The loop should run from 1 to 10.
// function moreCounting(){
//   for(let i=0; i<=10; i++){
//     console.log(`The value of i is: ${i}`);
//   }
// }
// moreCounting()



// Iterate over the StarWars array and print each element to the console.
//
// Iterate over the StarWars array again and print each character's name as well as the value of i.
//
// CHALLENGE
//
// Figure out how to iterate over every second element of the StarWars array, starting with the first element.
// => Han, R2D2, Leia
// Skip this challenge if you end up spending too much time on it.

// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// function StarWarsArr(){
//   for(let i=0; i<=StarWars.length-1; i++){
//     console.log(StarWars[i]);
//   }
// }
// StarWarsArr()
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// function StarWarsArr(){
//   for(let i=0; i<=StarWars.length-1; i++){
//     console.log(StarWars[i], i);
//
//   }
// }
// StarWarsArr()

// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// function StarWarsArr(){
  // for(let i=0; i<=StarWars.length-1; i++){
//     console.log(StarWars[i++]);
//   }
// }
// StarWarsArr()
