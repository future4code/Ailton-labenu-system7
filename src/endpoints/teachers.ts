import { Request, Response } from "express";
import { checkEmail, convertDate } from "../data/functions";
import {
  createNewTeacher,
  getAllTeachers,
  searchClassById,
  searchTeacherById,
  updateTeacherClass,
} from "../data/query";
import { Teacher } from "../types";

export const createTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { name, email, birth_date, class_id }: Teacher = req.body;
    const newTeacher: Teacher = { name, email, birth_date, class_id };

    // Esse trecho abaixo vai verificar se existe algum dado não informado, menos o class_id que pode não ser informado.
    Object.keys(newTeacher).forEach((key): void => {
      if (!newTeacher[key] && key !== "class_id") {
        errorCode = 404;
        throw new Error(`${key} não foi informado!`);
      }
    });

    newTeacher.birth_date = convertDate(birth_date as string);
    if (Date.parse(newTeacher.birth_date) === NaN) {
      errorCode = 404;
      throw new Error(`Data de aniversário é inválida!`);
    }

    if (!checkEmail(email)) {
      errorCode = 404;
      throw new Error(`E-mail inválido!`);
    }

    if (class_id && !(await searchClassById(class_id)).length) {
      errorCode = 404;
      throw new Error(`ID da turma não existe!`);
    }
    newTeacher.birth_date = new Date(newTeacher.birth_date);
    newTeacher.id = Date.now().toString() + Math.random().toString();

    await createNewTeacher(newTeacher);

    res
      .status(201)
      .send({ message: `Professor(a) ${name} foi criado(a) com sucesso!` });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

export const getTeachers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const teachers: Teacher[] = await getAllTeachers();

    res.status(200).send({
      data: { teachers },
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

export const updateTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { id, class_id } = req.body;

    if (class_id && !(await searchTeacherById(id)).length) {
      errorCode = 404;
      throw new Error(`ID do(a) professor(a) não existe!`);
    }

    if (class_id && !(await searchClassById(class_id)).length) {
      errorCode = 404;
      throw new Error(`ID da turma não existe!`);
    }

    await updateTeacherClass(id, class_id);

    res
      .status(200)
      .send({ message: `Professor(a) alterado(a) de turma com sucesso!` });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
