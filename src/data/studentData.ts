import { Student } from "../types";
import { connection } from "./connection";

export const insertStudent = async (student: Student): Promise<void> => {
  const { id, name, email, birth_date, class_id } = student;

  await connection("Students").insert({
    id,
    name,
    email,
    birth_date,
    class_id,
  });
};
