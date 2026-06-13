// javascript Array join() Method

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

const fruits = ["apple", "banana", "cherry", "mango", "watermelon", "grapes"];

console.log("return new string with each fruits element ", fruits.join(" "));

// JavaScript Array flat() Method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

const numArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

console.log("flattened number Array =>", numArray.flat());

// another example with more flatted array

const numberArray = [1, 2, [3, 4], [5, 6, [7, 8, 9]]];

console.log("more nested flatted number Array OP =>", numArray.flat(Infinity));

// JavaScript Array.slice() Method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

console.log("Fruits element", fruits);

console.log("slicing fruits array =>", fruits.slice(2, 5)); // will return that index items only
