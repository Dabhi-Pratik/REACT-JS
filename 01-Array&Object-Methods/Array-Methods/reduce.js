// JavaScript reduce() Method
// This method uses a reducer function that reduces the results into a single output.

// Example: In this example, we will add all the values of the array and return a single output using the reduce() function.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Number Array: ", numberArray);

const sumOfNumber = numberArray.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log("sumOfNumber : ", sumOfNumber);

//using loop

let sum = 0;

for (let i = 0; i < sumOfNumber.length; i++) {
  sum += numberArray[i];
}

console.log("Sum using loop: ", sum);

//Another example finding with for loop

function findingMax(numberArray) {
  let max = 0;

  for (let i = 0; i < numberArray.length; i++) {
    max = Math.max(numberArray[i]);
  }
  console.log("max number in number Array: ", max);
}

findingMax(numberArray);

console.log("<-------------------------------------->");

//finding max using loop

function findingMax2(numberArray) {
  let max = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > max) {
      max = numberArray[i];
    }
  }
  console.log("Finding max using second method: ", max);
}

findingMax2(numberArray);

// with reduce method

const maxNum = numberArray.reduce((acc, curr) => Math.max(acc, curr));

const maxNum2 = numberArray.reduce((acc, curr) => {
  if (acc > curr) {
    curr = acc;
  }
  return curr;
});

console.log("maxNum: ", maxNum);

console.log("maxNum2: ", maxNum2);

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

// suppose we want to find age of a person with total number of people in personDetails array of object how can we ??

let similarAgeNumber = personDetails.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("similar Age Number: ", similarAgeNumber);

// another Example

const personDetails2 = [
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

// suppose we want to filter out people which age is greater than 40 and their first name  using reduce method

const personAge = personDetails2.reduce((acc, curr) => {
  if (curr.age > 40) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log("Person Age Name which age is greater than 40 : ", personAge);
