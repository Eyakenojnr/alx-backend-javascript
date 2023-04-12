interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [sample: string]: any,
}

// <Directors> interface that extends to <Teacher>
interface Directors extends Teacher {
    numberOfReports: number,
}

const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework = () : string => 'Currently working';

    displayName = () : string => this.firstName;
}

interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Ayodeji", "David");
console.log(student.displayName())
console.log(student.workOnHomework())