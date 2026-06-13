// JavaScript map() method
// This method iterates over an array, transforms the array according to user-specified conditions and returns a new array. Using this shorter syntax, one could easily make code more readable and understandable.

// Example: In this example, we will multiply each element of the array by 5 using the map() method.

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log("Number: ", number);

let newNumber = number.map((num) => num * 5);

console.log("New Number Array: ", newNumber);

// another Example

const fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

let fruitsArray = fruits.map((fruits) => fruits);

console.log("Fruits Array: ", fruitsArray);

// another Example

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

// now want to find only Name

const personName = personDetails.map((personDetails) => {
  //   return personDetails["name"];

  //   or

  return personDetails.name;
});

console.log("person Name: ", personName);
