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
	students: Student[]
	teachers: Teacher[]
}

export type Student = {
	id: string
	name: string
	email: string
	birth_date: string | Date
	class_id: string
}

export const typingStudent = async (student: any) => {
	const typeStudent: Student = {
		id: student.id,
		name: student.name,
		email: student.email,
		birth_date: moment(student.birth_date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
		class_id: student.class_id,
	}
	return typeStudent
}
