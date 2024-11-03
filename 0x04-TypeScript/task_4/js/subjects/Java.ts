/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }


  class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava > 0) {
        return `Availble Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }

  // Export an instance of Java
  export const java = new Java();
}
