 //Easy Going
// var counter = 1;
// while(counter<=20){
//   console.log(counter);
//   counter++
// }

//Git commit message: "Commit 1 -Easy Going answered"

// Get Even
// var counter = 1;
// while(counter<=200){
//   if(counter%2===0){
//   console.log(counter);
//   }
//   counter++
// }

//Git commit message: "Commit 2 - Get Even answered"

//Excited Kitten
// var counter = 19;
// while(counter>=0){
//   console.log("Love me, pet me! HSSSSSS!");
//   counter--;
// }

//Random log
// var counter = 0;
// var phraseArr = ["...human...why you taking pictures of me?...",
//  "...the catnip made me do it...", "...why does the red dot always get away..."];
// while(counter<=20){
//   console.log("Love me, pet me! HSSSSSS!");
//   if (counter%2===0) {
//   var rand = phraseArr[Math.floor(Math.random() * phraseArr.length)];
//   console.log(rand);
//   }
//   counter++;
// }

//Git commit message: "Commit 3 - Excited Kittens answered"

// function fizzBuzz(){
//   var counter = 1;
//   while (counter<=100) {
//     console.log(counter);
//     if(counter%3===0 && counter%5===0){
//       console.log(`FizzBuzz ${counter}`);
//     if(counter%3===0) {
//       console.log(`Fizz ${counter}`);
//     if(counter%5===0){
//       console.log(`Buzz ${counter}`);
//         }
//       }
//     }
//     counter++;
//   }
// }
// fizzBuzz();

// Git Commit Message: Commit 4 - Fizz Buzz answered"

//Getting to Know You
// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

//1
// thom.splice(0, 1, 'Gameboy')
// console.log(thom);
//2
// karolin.splice(1,1,'17')
// console.log(karolin);
//3
// matt.splice(2,1,"Gotham City")
// console.log(matt);
// 4
// kristyn.splice(2,1,"Brooklyn")
// console.log(kristyn);

// Git Commit Message: "Commit 5 - Getting to Know You answered"
// var ninjaTurtles = ['Leonardo', 'Raphael', 'Michaelangelo'];
// for(let i = 0; i<=ninjaTurtles.length-1; i++){
//   console.log(ninjaTurtles[i].toUpperCase());
// }

// Git Commit Message: "Commit 6 - Yell at the Ninja Turtles answered"


//Return of the Closets

//
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//
//
// Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
//

// SOLUTION:
// console.log("answer for Alien Attire:");
//
// // kristynsShoe = kristynsCloset[0];
//
// // or
//
// kristynsShoe = kristynsCloset.shift();
// console.log(kristynsCloset);
//
// thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset);
//
//
// // Dress Us Up
// // 1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
// //
//
// // ==============================================
// // SOLUTION:
// console.log("answer for Dress Us Up:")
//
// // 3 outfits for Kristyn
// for (let i = 1; i <=3; i++){
//
//   // Random number the max is the length of the array
//   kristynRandomNum = Math.floor((Math.random() * (kristynsCloset.length - 1)));
//
//   console.log("Kristyn will be wearing: " + kristynsCloset[kristynRandomNum] + " and " + kristynsCloset[kristynRandomNum]);
// }
//
// console.log("++++++++++++++++++++");
//
// // 3 outfits for Thom
// for (let i = 1; i <=3; i++){
//
//   thomRandomShirtNum = Math.floor(Math.random() * (thomsCloset[0].length - 1));
//
//   thomRandomPantsNum = Math.floor(Math.random() * (thomsCloset[1].length - 1));
//
//   thomRandomAccessoriesNum = Math.round(Math.random() * (thomsCloset[2].length - 1));
//
//   console.log("Thom will be wearing: " + thomsCloset[0][thomRandomShirtNum] + " and " + thomsCloset[1][thomRandomPantsNum] + " and " + thomsCloset[2][thomRandomAccessoriesNum]);
//
// }
//
//
// //The commit message should read:"Commit 10 - Kristyn and Thom have their outfits ready for class - array practice"
// //
// // Dirty Laundry
// // Continue looking at the closet arrays:
// // 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// //
//
// // SOLUTION:
// console.log("answer for Dirty Laundry:")
//
// for (let i = 0; i < kristynsCloset.length - 1; i ++){
//   console.log("WHIRR: Now washing " + kristynsCloset[i]);
// }
//
// console.log("++++++++++++++++++++");
//
// for (let i = 0; i < thomsCloset.length; i ++){
//   let closetSection = thomsCloset[i];
//
//   for (let j = 0; j < closetSection.length; j ++){
//     console.log("WHIRR: Now washing " + closetSection[j]);
//   }
// }
//
//
// //cInventory
// // 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.
// // SOLUTION:
// console.log("answer for Inventory:")
//
// console.log(thomsCloset[0]);
// console.log(thomsCloset[1]);
// console.log(thomsCloset[2]);
//
// //Multiples of 3 and 5
// //
// // _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_
// //
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// //
// // Find the sum of all the multiples of 3 or 5 below 1000.
// //
// // :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:
//
// // SOLUTION:
// console.log("answer for Multiples of 3 and 5:")
//
// let sum = 0;
// for (let i = 1; i < 1000; i ++ ){
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);
//
// // Hungry for More
// //
// // ## Triangles
// //
// // 1. Write a loop that console logs a **right isoscelese triangle** made of '#' that has the height and length of the argument.
// //
// // >Ex: argument is 7
// // ```
// // #
// // ##
// // ###
// // ####
// // #####
// // ######
// // #######
// // ```
// //
// // 2. Write a loop that console logs an **upside down right isosceles triangle** made of '#' that has the height and length of the argument.
// //
// // >Ex: argument is 6
// // ```
// // ######
// // #####
// // ####
// // ###
// // ##
// // #
// // ```
// //
//
// // SOLUTION:
// // console.log("answer for Triangles:")
// //
// // // right isoscelese triangle
// // const height = 6;
// // let buildTriangle = "";
// //
// // for (let i = 0; i < height; i++){
// //   buildTriangle += '#';
// //   console.log(buildTriangle);
// // };
//
// // upside down right isosceles triangle
// // let height = 6;
// //
// // for (let i = height; i > 0; i--){
// //   console.log('#'.repeat(i));
// // };
//
// // Documentation about repeat():https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//
// // Second Solution:
//
// let height = 8;
// let buildTriangle = [];
//
// while (height > 0){
//   buildTriangle = [];
//   for (let i = height; i > 0; i--){
//     buildTriangle.push('#');
//   };
//   console.log(buildTriangle.join(""));
//   height = height - 1;
// }
//
//
// // ## Find the Median
// // - Find the median number in the following `nums` array, then console.log that number.
// // -  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`
// //
// // ```
// // const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// //
// // Expected output:
// // => 15
// // ```
// //
// console.log("answer for Find the Median")
// // To calculate the median of any set of numbers, you need to write the numbers in order. If there is an odd number of results, the median is the middle number. If there is an even number of results, the median will be the mean of the two central numbers.
//
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//
// let median = 0;
//
// // Sort the array to get the numbers in ascending order
// nums.sort();
// console.log("Nums array after sort " + nums);
// console.log("How long is the array " + nums.length);
//
// // Check if the array has an even numbered of elements
// if (nums.length % 2 === 0){
//   const middleIndex1 = Math.floor((nums.length-1)/2);
//   const middleIndex2 = Math.ceil((nums.length-1)/2);
//   median = (nums[middleIndex1] + nums[middleIndex2])/2;
// } else {
//   median = nums[Math.floor(nums.length/2)];
// }
//
// console.log(median);
