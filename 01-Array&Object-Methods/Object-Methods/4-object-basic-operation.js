// creating object using class construction

class PersonDetails {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new PersonDetails("Pratik", 19, "Software developer");

console.log("Person Details: ", person);

// creating one more  object with different values using object literals

const studentDetails = {
  totalStudent: 500,
  exam: "Common Entrance test ",
  block: "A-F",
};

// now merging two objects into one object

const allDetails = { ...person, ...studentDetails };

console.log("All Details: ", allDetails);
