/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Setter method that sets the teacher attribute
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
