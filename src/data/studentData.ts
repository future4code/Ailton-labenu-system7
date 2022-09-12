import { Student, typingStudent } from "../types";
import { connection } from "./connection";

export const insertStudent = async (student: Student): Promise<void> => {
  const { id, name, email, birth_date, class_id } = student;

  await connection("Students").insert({
    id,
    name,
    email,
    birth_date: new Date(birth_date),
    class_id,
  });
};

export const selectStudent = async (
  name: string,
  studentId?: string
): Promise<Student | undefined> => {
  const [result] = await connection("Students").where({ name });

  if (result) {
    const typeStudent = typingStudent(result);
    return typeStudent;
  } else {
    return undefined;
  }
};

export const selectStudentById = async (
  id: string
): Promise<Student | undefined> => {
  const [result] = await connection("Students").where({ id });

  if (result) {
    const typeStudent = typingStudent(result);
    return typeStudent;
  } else {
    return undefined;
  }
};

export const updateStudentClass = async (
  id: string,
  class_id: string
): Promise<void> => {
  await connection("Students").update({ class_id }).where({ id });
};
