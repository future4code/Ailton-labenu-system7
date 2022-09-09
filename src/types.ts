import moment from 'moment'

export type Teacher = {
	id?: string
	name: string
	email: string
	birth_date: string | Date
	class_id?: string
}

export type updatePersonClass = {
	id: string
	class_id: string
}

export type Class = {

	id: string
	name: string
	module: number
	students: any[]
	teachers: any[]
}

export type Student = {
	id: string
	nome: string
	email: string
	data_nasc: string | Date
	turma_id: string
}

export const typingStudent = async (student: any) => {
	const typeStudent: Student = {
		id: student.id,
		nome: student.nome,
		email: student.email,
		data_nasc: moment(student.data_nasc, 'YYYY-MM-DD').format('DD/MM/YYYY'),
		turma_id: student.turma_id,
	}
}
