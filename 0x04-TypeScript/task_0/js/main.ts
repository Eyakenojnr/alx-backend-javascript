interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Sodiq',
  lastName: 'Sotayo',
  age: 22,
  location: 'Rivers state',
}

const student2: Student = {
  firstName: 'Uthman',
  lastName: 'Opeyemi',
  age: 24,
  location: 'Akwa-Ibom state',
}

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  // Create the table element
  const table = document.createElement('table');
  table.style.border = '1px solid black'; // Border for visibility

  // Create and append the table header row
  const headerRow = document.createElement('tr');
  const headers = ['First Name', 'Location'];
  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create and append table rows for each student in the students array
  students.forEach((student) => {
    const row = document.createElement('tr');
    
    // First Name cell
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    // Location cell
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the students table
renderTable(studentsList);
