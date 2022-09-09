import { Request, Response } from "express";
import { changeClassModule, createClass, selectClasses } from "../data/class";
import { Class } from "../types";

export const postClass = async(req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        if(!name) {
            res.statusCode = 422;
            throw new Error("É preciso passar um nome para a nova turma.");
        }

        await createClass(name);

        res.status(201).send({ message: "Turma criada com sucesso!" });
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage });
    }
}

export const getClass = async(req: Request, res: Response): Promise<void> => {
    try {
        const classes: Class[] = await selectClasses();

        res.status(200).send({ classes: classes }); 
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage });
    }
}

export const putClass = async(req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id
        const module: number = req.body.module as number
        if(!module) {
            res.statusCode = 422;
            throw new Error("É preciso passar um valor de módulo para a turma.");
        }
        if(isNaN(module) || (module < 1 && module > 6)) {
            res.statusCode = 422;
            throw new Error("O módulo deve ser um número de 1 a 6.");
        }

        await changeClassModule(module, id);

        res.status(200).send({ message: "Módulo atualizado com sucesso." });
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage });
    }
}