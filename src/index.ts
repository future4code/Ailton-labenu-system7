import { app } from "./app";
import {
  createTeacher,
  getTeachers,
  updateTeacher,
} from "./endpoints/teachers";

app.post("/teacher", createTeacher);
app.get("/teacher", getTeachers);
app.put("/teacher", updateTeacher);
