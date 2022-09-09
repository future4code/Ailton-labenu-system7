import { Teacher } from "../types";
import { connection } from "./connection";

export const createNewTeacher = async (teacher: Teacher) =>
  await connection.insert(teacher).into("Teachers");

export const searchClassById = async (id: string) =>
  await connection("Class").select("*").where({ id });

export const searchTeacherById = async (id: string) =>
  await connection("Teachers").select("*").where({ id });

export const getAllTeachers = async () =>
  await connection("Teachers").select("*");

export const updateTeacherClass = async (id: string, class_id: string) =>
  await connection("Teachers").update({ class_id }).where({ id });
