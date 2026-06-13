// JavaScript filter() Method
// This method is used to filter out the contents, as per the user-specified condition, in the form of a new array.

// Example: In this example, we will filter the even numbers from the array using the filter() method.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const evenNumber = number.filter((num) => num % 2 === 0);

console.log("Even Number: ", evenNumber);

// another example

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 45,
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

// suppose we want to filter out people which age is greater than 40 and their first name

const personAge = personDetails.filter((x) => x.age > 40);

console.log("Person age is Grater than 40: ", personAge);

// Now i want to find name of that person which age is grater than 40
// I can do that by Chaining in that

// upper code as it and now chaining

const personName = personDetails.filter((x) => x.age > 40).map((x) => x.name);

console.log("Person age is grater than 40", personName);

// or you can do similar thing using

const personAgeNum = personDetails.filter((x) => x.age > 40);

console.log("Person age is grater than 40: ", personAgeNum);

// then

const personAgeName = personAgeNum.map((x) => x.name);

console.log("Person Name which grater than 40", personAgeName);
