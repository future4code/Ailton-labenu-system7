import { Teacher, Class, typingStudent, Student } from "../types";
import { connection } from "./connection";
import { displayDate } from "./functions";

export const createClass = async (name: string): Promise<void> => {
  const id: string = Date.now().toString() + Math.random().toString();
  await connection("Class").insert({
    id,
    name,
  });
};

export const allClassesexport = async (idClass: string): Promise<any> => {
  const results = await connection("Class").where("id", `${idClass}`);
  console.log(results);

  if (results) {
    return typingStudent(results);
  } else {
    return undefined;
  }
};

const selectTeachers = async (classId: string): Promise<Teacher[]> => {
  const result = await connection("Class as C")
    .select("T.id", "T.name", "T.email", "T.birth_date")
    .rightJoin("Teachers as T", { "C.id": "T.class_id" })
    .where({ "C.id": classId });

  const teachers: Teacher[] = result.map((item) => {
    return (
      item && {
        id: item.id,
        name: item.name,
        email: item.email,
        birth_date: displayDate(item.birth_date),
      }
    );
  });

  return teachers;
};

const selectStudents = async (classId: string): Promise<Student[]> => {
  const result = await connection("Class as C")
    .select("S.id", "S.name", "S.email", "S.birth_date")
    .rightJoin("Students as S", { "C.id": "S.class_id" })
    .where({ "C.id": classId });

  const students: Student[] = result.map((item) => {
    return (
      item && {
        id: item.id,
        name: item.name,
        email: item.email,
        birth_date: displayDate(item.birth_date),
      }
    );
  });

  return students;
};

const returnClassInfo = async (classList: Class[]): Promise<Class[]> => {
  const classes: Class[] = [];

  for (const item of classList) {
    const teachers = await selectTeachers(item.id);
    const students = await selectStudents(item.id);

    const { id, name, module } = item;
    const classInfo = { id, name, module, students, teachers };

    classes.push(classInfo);
  }

  return classes;
};

export const selectClasses = async (): Promise<Class[]> => {
  const result: Class[] = await connection("Class").where("module", ">", 0);

  return returnClassInfo(result);
};

export const selectNewClasses = async (): Promise<Class[]> =>
  returnClassInfo(await connection("Class").where("module", 0));

export const changeClassModule = async (
  module: number,
  id: string
): Promise<void> => {
  await connection("Class").where({ id }).update({ module });
};
