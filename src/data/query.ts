import { Class, Teacher } from "../types";
import { connection } from "./connection";

export const createNewTeacher = async (teacher: Teacher): Promise<void> =>
  await connection.insert(teacher).into("Teachers");

export const searchClassById = async (id: string): Promise<Class[]> =>
  await connection("Class").select("*").where({ id });

export const searchTeacherById = async (id: string): Promise<Teacher[]> =>
  await connection("Teachers").select("*").where({ id });

export const getAllTeachers = async (): Promise<Teacher[]> =>
  await connection("Teachers").select("*");

export const updateTeacherClass = async (
  id: string,
  class_id: string
): Promise<void> => {
  await connection("Teachers").update({ class_id }).where({ id });
};
