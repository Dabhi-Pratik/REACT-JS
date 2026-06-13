// calculating array length

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

console.log("Student length: ", student.length);

// Increase and Decrease the Array Length

console.log(
  "Student element and their length before: ",
  student.length,
  student,
);

// increase length

student.length = 15;

console.log(
  "Student Element and its length after increasing: ",
  student.length,
  student,
);

student.length = 4;

console.log(
  "fruits element and its length after decreeing: ",
  student.length,
  student,
);
