interface Student {
  name: string;
  age: number;
  qualification:
    | "metric"
    | "intermediate"
    | "undergraduate"
    | "graduation"
    | "master"
    | "PHD"
    | "diploma";
}
const students: Student[] = [];
students.push({ name: "Faisal Ahmed", age: 22, qualification: "intermediate" });
console.log(students);
