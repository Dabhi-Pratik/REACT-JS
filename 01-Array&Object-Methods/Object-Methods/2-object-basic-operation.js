// accessing object properties

let personDetails = {
  name: "Pratik",
  age: 19,
  course: "Frontend Developer",
};

console.log("person Details:", personDetails);

// now accessing the values of personDetails object using . notation

console.log("Person Name: ", personDetails.name);

// now accessing the values of personDetails object using []

console.log("Person Course: ", personDetails["course"]);

//  Modifying Object Properties using . notation we can modify using brackets too,

personDetails.name = "Utsav";

// using brackets notation

personDetails["name"] = "Utsav";

console.log("Person Name: ", personDetails.name);

//  Adding Properties to an Object using brackets notation too.

personDetails.email = "email@example.com";

console.log("Person details object with all changes: ", personDetails);

// adding properties to an Object using brackets notation

personDetails["Frontend"] = "Developing";

console.log("person details object with all changes: ", personDetails);
