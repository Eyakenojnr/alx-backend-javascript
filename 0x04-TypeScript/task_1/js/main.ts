interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [sample: string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number,
}

const displayTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`; // print Teacher

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printName = () : string => this.firstName;

    workOnAssignment = () : string => 'Working presently';
}

interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Ayodeji", "David");
console.log(student.printName())
console.log(student.workOnAssignment())