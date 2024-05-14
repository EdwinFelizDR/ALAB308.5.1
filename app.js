/*Part 1: Thinking Functionally 

*/

// Function to take an array of numbers and return the sum.
function sumArray(numbers) {
   let acc =0;
   for (i=0; i<numbers.length; i++){
      acc += numbers[i];
   }
   return acc; //Returning the sum of all elements in the array(sumArray)
}
console.log("Take an array of numbers [1, 8, 3, 4, 5] and return the sum: "+sumArray([1, 8, 3, 4, 5])); // Output: 15

// Function to take an array of numbers and return the average.
function averageArray(numbers) {
   if (numbers.length === 0) return 0;
   return sumArray(numbers) / numbers.length; //Using the previous function (sumArray) divide by the array length
}
console.log("Take an array of numbers [5, 8, 3, 4, 10] and return the average: " + averageArray([5, 8, 3, 4, 10])); // Output: 3 // Example test for averageArray

// Function to take an array of strings and return the longest string.
function longestString(strings) {
   if (strings.length === 0) return "";
    
   let longest = strings[0];
   
   for (let i = 1; i < strings.length; i++) {
       if (strings[i].length > longest.length) {
           longest = strings[i];
       }
   }
   
   return longest;
}
const arrayStrings=["say", "hello", "in", "the", "morning"];
console.log("The longer word-string in: [say, hello, in, the, morning] is: "+longestString(arrayStrings)); 
// Output: "morning" // Example test for longestString

// Function to take an array of strings and a number, 
//and return an array of the strings with the strings (words) 
//that are longer than the given number.
function stringsLongerThan(strings, length) {
   return strings.filter(str => str.length > length);
}

console.log("The longest strings(words) in: [say, hello, in, the, morning] are: "+stringsLongerThan(arrayStrings, 3)); // Output: ["hello", "morning"]

// Function to take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n, current = 1) {
   if (current > n) return;
   console.log(current+" of "+n);
   printNumbers(n, current + 1);
}

// Example test for printNumbers
printNumbers(5); // Output: 1, 2, 3, 4, 5 (each on a new line)