export default function getStudentIdsSum(studentList) {
  return studentList.reduce((prev, next) => prev + next.id, 0);
}
