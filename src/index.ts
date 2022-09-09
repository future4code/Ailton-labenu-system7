import { app } from "./app";
import {
  createTeacher,
  getTeachers,
  updateTeacher,
} from "./endpoints/teachers";
import { getClass, postClass, putClass } from "./endpoints/class";

app.post("/teacher", createTeacher);
app.get("/teacher", getTeachers);
app.put("/teacher", updateTeacher);

app.post("/class", postClass);
app.get("/class", getClass); //terminar o join
app.put("/class/:id", putClass);
