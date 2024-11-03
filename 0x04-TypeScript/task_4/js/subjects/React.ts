/// <reference path="Subject.ts" />

namespace Subjects {
  // Extend Teacher with an optional attribute
  export interface Teacher {
    experienceTeachingReact?: number;
  }


  class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher'; // Teacher has no experience teaching React
    }
  }

  // Export an instance of React
  export const react = new React();
}
