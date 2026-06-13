// Accessing Elements of an Array

let student = ["Pratik", "Utsav", "Vaishali", "Brij"];

console.log("Name Array ", student);

// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

console.log("Sir Favorite student:", student[2]);

// accessing first Element of an array

console.log("First Student Name: ", student[0]);

// accessing last element of an array

console.log("First Student Name: ", student[student.length - 1]);

//  Modifying the Array Elements

// fruits array before changing elements

console.log("Student array second element before changing is : ", student[1]);

student[1] = "Dharmik";

console.log(
  "Now we have Changed second Element in student Array: ",
  student[1],
);

console.log("Student after Dharmik added: ", student);
