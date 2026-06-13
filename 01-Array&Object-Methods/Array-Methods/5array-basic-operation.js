//  Iterating Through Array Elements

const student = [
  "Dharmik",
  "Utsav",
  "Vaishali",
  "Brij",
  "Pratik",
  "Parth",
  "Meet",
  "Yash",
  "Darshan",
  "Darshak",
];

//   using for loop

for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}

// using for of loop

for (let i of student) {
  console.log("For of loop: ", i);
}

// using for each

student.forEach((std, index) => {
  console.log("Student using for Each OP: ", index, student);
});

// this for each function will execute for each time for the all element of an array

// Array Concatenation

// concatenation means joining two item into one

let name = ["Krupal", "Jay", "Sanjai", "Krusnal", "Batti"];

let total = student.concat(name);

console.log("All Available Names: ", total);

// Conversion of an Array to String

console.log("Converting an Array to String :", student.tostring());
