import { app } from './app'
import { createTeacher, getTeachers, updateTeacher } from './endpoints/teachers'
import { getClass, postClass, putClass } from './endpoints/class'
import { createStudent, getStudantByName } from './endpoints/students'

app.post('/teacher', createTeacher)
app.get('/teacher', getTeachers)
app.put('/teacher', updateTeacher)

app.post('/class', postClass)
app.get('/class', getClass)
app.put('/class/:id', putClass)

app.post('/student', createStudent)
app.get('/student/:name', getStudantByName)
