import { Student, typingStudent } from '../types'
import { connection } from './connection'

export const insertStudent = async (student: Student): Promise<void> => {
	const { id, name, email, birth_date, class_id } = student

	await connection('Students').insert({
		id,
		name,
		email,
		birth_date,
		class_id,
	})
}

export const selectStudent = async (
	name: string,
	studentId?: string
): Promise<Student | undefined> => {
	const [result] = await connection('Students')
		.where({ name })
		.orWhere({ id: studentId })

	if (result) {
		const typeStudent = typingStudent(result)
		return typeStudent
	} else {
		return undefined
	}
}
