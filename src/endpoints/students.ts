import { Request, Response } from 'express'
import { Class, Student } from '../types'
import {
	selectClasses,
	allClassesexport,
	changeClassModule,
} from '../data/class'
import { insertStudent, selectStudent, selectStudentById, updateStudentClass } from '../data/studentData'

//-----------------------CRIAR ESTUDANTE----------------------------
export const createStudent = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, email, birth_date, class_id } = req.body

		if (!name || !email || !birth_date || !class_id) {
			res.statusCode = 404
			throw new Error('Tente novamente, algo esta incompleto')
		}

		const returnClass: Class[] = await allClassesexport(class_id)

		if (!returnClass) {
			res.statusCode = 404
			throw new Error('turma com esse id não existe')
		}

		const newStudent: Student = {
			id: Date.now().toString(),
			name,
			email,
			birth_date,
			class_id,
		}

		await insertStudent(newStudent)

		res.status(200).send({ message: 'Estudante criado com sucesso' })
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//---------------------BUSCAR ESTUDANTE PELO NOME-------------------------------
export const getStudantByName = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const name = req.params.name

		if (!name || name === ":name") {
			res.statusCode = 404
			throw new Error(`Nenhum nome foi informado!`)
		}

		const nameStudent = await selectStudent(name)

		if (!nameStudent) {
			res.statusCode = 404
			throw new Error(`Estudante com esse ${name} não foi encontrado`)
		}

		res.status(200).send({ students: nameStudent })
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//----------------------TROCAR ESTUDANDE DE TURMA------------------------------

export const changeStudentClass = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { studentId, classId } = req.body
		
		if (!studentId || !classId) {
			res.statusCode = 404
			throw new Error('Id e modulo da turma deve ser passado')
		}
		
		const studentTrue = await selectStudentById(studentId)
		
		if (!studentTrue) {
			res.statusCode = 404
			throw new Error(`Estudante com o id ${studentId} não existe.`)
		}

		await updateStudentClass(studentId, classId)
		res.status(200).send({message: "Troca de turma do aluno feita com sucesso!"})
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
