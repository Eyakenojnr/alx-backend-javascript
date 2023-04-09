interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student_1: Student = {
    firstName: 'Ayodeji',
    lastName: 'Ayodele',
    age: 25,
    location: 'Mayfair'
}

const student_2: Student = {
    firstName: 'David',
    lastName: 'Thomas',
    age: 29,
    location: 'Ede road'
}

const studentList: Array<Student> = [student_1, student_2];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead'); // table head
const th_1: HTMLTableCellElement = document.createElement('th'); // first table header
const th_2: HTMLTableCellElement = document.createElement('th'); // second table header

th_1.innerText = 'First Name';
th_1.style.border = '1px solid gray';
th_1.style.padding = '.5rem';
th_2.innerText = 'Location';
th_2.style.border = '1px solid gray';
th_2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';


thead.append(th_1);
thead.append(th_2);
table.append(thead);


studentList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const column_1: HTMLTableCellElement = document.createElement('td');
    const column_2: HTMLTableCellElement = document.createElement('td');

    column_1.innerText = student.firstName;
    column_1.style.border = '1px solid gray';
    column_1.style.padding = '.5rem';
    column_2.innerText = student.lastName;
    column_2.style.border = '1px solid gray';
    column_2.style.padding = '.5rem';

    row.append(column_1);
    row.append(column_2);
    table.append(row);
});

body.append(table);