// adding element to an array
// adding element to an array in last

const student = ["Dharmik", "Utsav", "Vaishali", "Brij", "Pratik"]

console.log("student array before", "and  their length", student.length, student);

// now adding en element into an array

student.push("Rohit")

console.log("Student array after", "and  their length", student.length, student);

// adding element to an array from the starting

student.unshift("Parth")

console.log("fruits array", "and its length", student.length, student);

// Removing Elements from an Array

// To remove the elements from an array we have different methods like pop(), shift(), or splice().

// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.

// pop() method example


console.log("Student elements and their length", student.length, student);

// removing elements from an array from last

student.pop()

console.log("Student element after removing last Element and Their", student.length, student)

// removing elements from an array from th start

console.log("Student elements and their length", student.length, student);

student.splice(3, 2)

console.log("Student Elements and their length after removing 2 elements: ", student.length, student)

// what if we try to remove the element beyond it's length let's try

student.splice(4, 2)

console.log("Student elements and their length", student.length, student); //(no effect since the index is beyond the array length