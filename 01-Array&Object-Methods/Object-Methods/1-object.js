// An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

// creating object using object literal syntax

const personDetails = {
  name: "Pratik",
  age: 19,
};

console.log(typeof personDetails);

console.log("personDetails: ", personDetails);

// here personDetails object which contains some information regarding the person in key value pairs

// creating object using object constructor

const studentDetails = new Object();

console.log(typeof studentDetails);

studentDetails.totalStudent = 500;

studentDetails.exam = "Common entrance test";

studentDetails.block = "A-E";

console.log("Student Details: ", studentDetails);
