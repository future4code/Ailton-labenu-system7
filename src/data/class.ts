import { Class } from '../types'
import { connection } from './connection'
import { typingStudent } from '../types'

export const createClass = async (name: string): Promise<void> => {
	const id: string = Date.now().toString() + Math.random().toString()

	await connection('Class').insert({
		id,
		name,
	})
}

export const selectClasses = async (): Promise<any> => {
	const result: Class[] = await connection('Class')

	// const classes: Class[] = []
	// result.map(async(item): Promise<void> => {
	//     const teachers: any[] = await connection('Class as C')
	//         .rightJoin('Teachers as T', { 'C.id': 'T.class_id' })
	//         .where({'C.id': item.id});

	//     const students: any[] = await connection('Class as C')
	//         .rightJoin('Students as S', { 'C.id': 'S.class_id' })
	//         .where({'C.id': item.id});

	//     // console.log(students)

	//     const {id, name, module} = item
	//     console.log({id, name, module, students, teachers})
	//     classes.push({id, name, module, students, teachers})
	// });

	return result
}

export const changeClassModule = async (
	module: number,
	id: string
): Promise<void> => {
	await connection('Class').where({ id }).update({ module })
}

export const allClassesexport = async (idClass: string): Promise<any> => {
	const results = await connection('Class').where('id', `${idClass}`)

	if (results) {
		return typingStudent(results)
	} else {
		return undefined
	}
}
