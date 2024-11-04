interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string):
  Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Used as a type predicate to check if employee is a director
function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History'; // String literal type

function teachClass(todayClass: Subjects): void {
 console.log(todayClass === 'Math' ? 'Teaching Math' : 'Teaching History');
}

teachClass('Math');
teachClass('History');
