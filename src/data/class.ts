import { Class } from "../types";
import { connection } from "./connection";

export const createClass = async(name: string): Promise<void>  => {
    const id: string = Date.now().toString() + Math.random().toString();

    await connection('Class')
        .insert({
            id,
            name
        });
}

export const selectClasses = async(): Promise<any> => {
    const result: Class[] = await connection('Class');

    const classes: Class[] = []

    // result.forEach(async(item): Promise<void> => {
    //     const teachers: any[] = await connection('Class as C')
    //         .rightJoin('Teachers as T', { 'C.id': 'T.class_id' });
        
    //     const students: any[] = await connection('Class as C')
    //         .rightJoin('Students as S', { 'C.id': 'S.class_id' });
    
        // console.log(students)

        // const {id, name, module} = item

        // classes.push({
        //     id,
        //     name,
        //     module,
        //     students,
        //     teachers
        // })
    // })

    return result;
}

export const changeClassModule = async(module: number, id: string): Promise<void> => {
    await connection('Class')
        .where({ id })
        .update({ module });
}