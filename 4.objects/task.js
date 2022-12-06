function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined){
    this.marks.push(...marks)
  } 
}

Student.prototype.getAverage = function () {
  if (this.marks !== undefined){
    return this.marks.reduce((acc, marks, index, array) => acc + marks / array.length, 0);
  } return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student();
let student2 = new Student();