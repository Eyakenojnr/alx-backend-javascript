/// <reference path="Teacher.ts"/>
/// <reference path="Subject.ts" />

namespace Subjects {
  // Using declaration merging to extend Teacher with an optional attribute
  export interface Teacher {
    experienceTeachingC?: number;
  }


  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher'; // teacher has no experience teaching C
    }
  }

  // Export an instance of Cpp
  export const cpp = new Cpp();
}
