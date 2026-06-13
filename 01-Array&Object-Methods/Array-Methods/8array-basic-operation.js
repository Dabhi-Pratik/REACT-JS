// JavaScript indexOf() Method
// This method is used to find the index of a particular element in an array.

// Example: In this example, we will find out the index of the elements using the indexOf() method.

const fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log(
  "i want to find the index of mango and index is : ",
  fruits.indexOf("mango"),
);

// <--------------------------------------->

// counting from zero

// JavaScript includes() Method
// This method is used to check whether the array contains the specified element or not.

// Example: In this example, we will check whether the array contains the element or not using the includes() method.

console.log(
  "i want to find the watermelon is available in fruit and the answer is: ",
  fruits.includes("watermelon"),
);

// now i want to check orange i  available in fruit array or not :

console.log(
  "now i want to find the orange is available in fruit and the answer is: ",
  fruits.includes("orange"),
);

// <----------------------------------------------->

//  JavaScript sort() Method
// This method sorts the elements of an array in alphabetical order in ascending order.

// Example: In this example, we will sort the array alphabetically using the sort() method.

let alphabet = ["b", "e", "a", "c", "r", "y", "f"];

console.log("Sort the alphabet array: ", alphabet.sort());

// now what if we want to sort number datatype values

let numArray = [3, 5, 6, 7, 2, 4, 1, 0, 79, 90, 1];

console.log("Sorting number array in ascending order: ", numArray.sort());

// now in descending order

console.log(
  "Sorting number array in descending order: ",
  numArray.sort((a, b) => b - a),
);
