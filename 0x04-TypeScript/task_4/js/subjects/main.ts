/// <reference path="./Teacher.ts"/>
/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

console.log('C++');
// Set cTeacher as teacher and call two methods printing the string they return
Subjects.cpp.setTeacher = Subjects.cTeacher;
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

console.log('Java');
Subjects.java.setTeacher = Subjects.cTeacher;
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

console.log('React');
Subjects.react.setTeacher = Subjects.cTeacher;
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
