// Javascript find() & findIndex() Method
// This Method find out the first value which passes the user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.

// Example:In this example,we will  see the use of the find() and and findIndex() method

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numGreaterThan5 = numArray.find((value) => value > 5);

console.log("finding number greater than five in numArray : ", numGreaterThan5);

// <------------------------------------------------->

// findingIndex

let numGreaterThan5index = numArray.findIndex((value) => value > 5);

console.log(
  "index of  number greater than five in numArray is : ",
  numGreaterThan5index,
);

// <----------------------------------------------------->

// JavaScript slice() & splice() Method
// slice() selects the specified number of elements without affecting the original array elements whereas splice() removes the selected elements from the original array itself.

// Example: In this example, we will see the use of the slice() and splice() methods.

const fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

// slice()

console.log("fruits array op with slice", fruits.slice(3, 6));

// splice() can add or remove element in array

console.log("fruits array before", fruits);

console.log(
  "fruit array op with splice adding one more fruits in second index op : ",
  fruits.splice(2, 0, "orange"),
);

console.log("fruits array after", fruits);

// JavaScript some() and every() Method
// The some() method checks the user-specified conditions on some elements of an array (i.e. it checks for a few elements only), whereas every() method checks the user-specified conditions on every element of an array then returns the results in true or false.

// Example: In this example, we will see the use of some() and every() method of arrays.

// some will check if anyone elements satisfied the condition then it return true otherwise false if not condition not satisfied with any element

let num = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5];

console.log(
  "num greater than 100 is available ?",
  num.some((value) => value > 5),
);

// now every() method will check every element in array if every element satisfies the condition then try otherwise false

console.log(
  "checking every elements that num greater than 5 is available :",
  num.every((value) => value > 5),
);

// as you can see in num array there are the elements which are satisfying the condition but not every element satisfying the condition that's why op is false

// now true condition example

console.log(
  "check number every number  is greater than 1 or not ?",
  num.every((value) => value > 1),
);

// will return true if every element satisfies the condition    
