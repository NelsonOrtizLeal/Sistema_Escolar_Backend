import { useState, useEffect } from "react";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import * as API from "./services/data";

export function StudentEdit() {
  // Obteniendo parametros de la URL
  let params = useParams();

  // Guardando la información del studiante
  const [student, setStudent] = useState({});

  // Obteniendo la información del estudiante
  useEffect(() => {
    API.getStudent(params.idStudent).then((data) => {
      setStudent(data);
    });
  }, [params]);

  function handleSubmit(e) {
    e.preventDefault();
    API.UpdateAlumno(student).then((response) => {
      if (response == "true") {
        alert("Información actualizada");
      } else {
        alert("Error al actualizar la información");
      }
    });
  }

  return (
    <>
      <Header />
      <form id="formulario" onSubmit={handleSubmit}>
        Dni
        <input type="text" id="dni" required disabled value={student.dni} />
        <br></br>
        Nombre
        <input
          type="text"
          id="nombre"
          required
          value={student.nombre}
          onChange={(event) =>
            setStudent({ ...student, nombre: event.target.value })
          }
        />
        <br></br>
        Direccion
        <input
          type="text"
          id="direccion"
          required
          value={student.direccion}
          onChange={(event) =>
            setStudent({ ...student, direccion: event.target.value })
          }
        />
        <br></br>
        Edad
        <input
          type="number"
          id="edad"
          required
          value={student.edad}
          onChange={(event) =>
            setStudent({ ...student, edad: event.target.value })
          }
        />
        <br></br>
        Email
        <input
          type="email"
          id="email"
          required
          value={student.email}
          onChange={(event) =>
            setStudent({ ...student, email: event.target.value })
          }
        />
        <br></br>
        <input type="submit" id="editar" value="editar" />
      </form>
    </>
  );
}
