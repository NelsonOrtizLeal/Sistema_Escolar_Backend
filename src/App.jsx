import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { StudentNew } from "./StudentNew";
import { StudentEdit } from "./StudentEdit";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/student" element={<StudentNew />}></Route>
      <Route path="/student/:idStudent" element={<StudentEdit />}></Route>
    </Routes>
  );
}
