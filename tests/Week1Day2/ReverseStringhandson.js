let input = "Learn Functions and String";
let words = input.split(" ");

for (let i = words.length - 1; i >= 0; i--) {
    console.log(words[i]);
}

// let a = "T R E E"
// let b = a.split(" ")
// for (let i = b.length-1; i >= 0; i--)
// {console.log(b[i])}

// let input = "Learn Functions and String";
// let words = input.split(" ");

// for (let i = words.length - 1; i >= 0; i--) {
//     if (words[i] === "Functions") {
//         break;  // Stop the loop when the word is "and"
//     }
//     console.log(words[i]);
// }

let Data1 = "Learn Functions and String";

// Step 1: Split the string into words
let Data2 = input.split("");

// Step 2: Reverse the array
let reversedWords = words.reverse();

// Step 3: Join the array back into a string
// let output = reversedWords.join(" ");

// console.log(reversedWords);
 
console.log(input.split(" ").reverse().join(" ")); // another method