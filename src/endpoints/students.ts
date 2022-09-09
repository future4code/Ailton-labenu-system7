import { Request, Response } from 'express'
import { Class, Student } from '../types'
import { selectClasses, allClassesexport } from '../data/class'
import { insertStudent } from '../data/studentData'

export const createStudent = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { nome, email, data_nasc, turma_id } = req.body

		if (!nome || !email || !data_nasc || !turma_id) {
			res.statusCode = 404
			throw new Error('Tente novamente, algo esta incompleto')
		}

		const returnClass: Class[] = await allClassesexport(turma_id)

		if (!returnClass) {
			res.statusCode = 404
			throw new Error('turma com esse id não existe')
		}

		const newStudent: Student = {
			id: Date.now().toString(),
			nome,
			email,
			data_nasc,
			turma_id,
		}

		await insertStudent(newStudent)

		res.status(200).send({ message: 'Estudante criado com sucesso' })
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
}
