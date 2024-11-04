// Teacher interface
interface Teacher {
  readonly firstName: string; // Can only be set once, at initialization
  readonly lastName: string; // Only modifiable when a Teacher is first initialized
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allows any additional property with any type value
}

// Extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (first: string, last: string): string;
}

const printTeacher: printTeacherFunction =
  (firstName, lastName) => `${firstName[0]}. ${lastName}`;


// Describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Describing StudentClass through an Interface
interface StudentClassInterface {
  firstName: string;
  lastName: string;

  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const student = new StudentClass('Uduak', 'Umanah');
console.log(student.workOnHomework());
console.log(student.displayName());
