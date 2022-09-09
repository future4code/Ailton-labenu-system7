import { Student } from '../types'
import { connection } from './connection'

export const insertStudent = async (student: Student): Promise<void> => {
	const { id, nome, email, data_nasc, turma_id } = student

	await connection('student').insert({
		id,
		nome,
		email,
		data_nasc,
		turma_id,
	})
}
