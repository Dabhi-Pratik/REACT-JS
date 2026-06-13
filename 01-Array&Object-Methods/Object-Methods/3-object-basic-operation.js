// Creating object using functions constructor

const student1 = {
  name: "Utsav",
  age: 19,
  rollNo: 1,
};

console.log(student1.name);

// destructuring

const { name } = student1;

console.log("Student1 Name: ", name);

const student2 = {
  name: "Brij",
  age: 20,
  rollNom: 2,
};

const student3 = {
  name: "Vaishali",
  age: 18,
  rollNo: 3,
};

function Student(name, age, rollNo) {
  ((this.name = name), (this.age = age), (this.rollNo = rollNo));
}

const student4 = new Student("Pratik", 19, 5);

const student5 = new Student("Dharmik", 19, 5);

const student6 = new Student("Rohit", 19, 6);

console.log("Student 1: ", student1);

console.log("Student 2: ", student2);

console.log("Student 3", student3);

console.log("Student 4", student4);

console.log("Student 5", student5);

console.log("Student 6", student6);

function personDetails(name, age, job) {
  ((this.name = name), (this.age = age), (this.job = job));
}

const person = new personDetails("Shivam", 23, "Software Developer");

const person2 = new personDetails("Umang", 23, "Software Developer");

console.log("Person object created: ", person);

console.log("Person2 object created: ", person2);

// adding properties to object

personDetails.prototype.email = "email@example.com";

console.log("Person Object with New email Prototype added: ", person.email);
