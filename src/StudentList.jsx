import * as API from "./services/data.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function StudentList() {
  const usuario = sessionStorage.getItem("usuario");

  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.getAlumnoProfesor(usuario).then((data) => {
      setStudents(data);
    });
  }, [usuario]);

  function deleteStudent(id) {
    API.deleteStudent(id).then((response) => {
      if (response == "true") {
        alert("Alumno eliminado");
      } else {
        alert("No se pudo eliminar el usuario");
      }
    });
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Asignatura</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.dni}</td>
              <td>{student.nombre}</td>
              <td>{student.direccion}</td>
              <td>{student.edad}</td>
              <td>{student.email}</td>
              <td>{student.asignaturaNombre}</td>
              <td>
                <Link to={"/student/califications/" + student.matriculaId}>
                  Calificar
                </Link>
              </td>
              <td>
                <Link to={"/student/" + student.id}>Editar</Link>
              </td>
              <td onClick={() => deleteStudent(student.id)}>Eliminar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
