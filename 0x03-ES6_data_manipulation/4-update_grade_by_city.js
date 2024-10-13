export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });
}
