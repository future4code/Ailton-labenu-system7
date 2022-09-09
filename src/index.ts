import { app } from './app'
import { createTeacher, getTeachers, updateTeacher } from './endpoints/teachers'
import { getClass, postClass, putClass } from './endpoints/class'
import { createStudent } from './endpoints/students'

app.post('/teacher', createTeacher)
app.get('/teacher', getTeachers)
app.put('/teacher', updateTeacher)

app.post('/class', postClass)
app.get('/class', getClass) //terminar o join
app.put('/class/:id', putClass)

app.post('/student', createStudent)
