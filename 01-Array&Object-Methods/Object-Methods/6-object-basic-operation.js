// Object accessor set Method

// example

const studentDetail = {
  name: "Pratik",
  age: "",

  set studentAge(age) {
    this.age = age;
  },
};

studentDetail.studentAge = 22;
