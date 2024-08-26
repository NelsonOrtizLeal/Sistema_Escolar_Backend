import { Header } from "./Header";
import { useState } from "react";
import * as API from "./services/data";

export function StudentNew() {
  const [student, setStudent] = useState({
    dni: "",
    nombre: "",
    direccion: "",
    edad: "",
    email: "",
    asignatura: "1",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    
    const response = await API.createStudent(student);

    if(response === "true"){
        alert("Alumno matriculado");
        document.getElementById("formulario").reset();
    }else{
        alert("Error al insertar el alumno");
    }
  }

  return (
    <>
      <Header />
      <h1>Nuevo alumno</h1>
      <form id="formulario" onSubmit={handleSubmit}>
        <label htmlFor="dni">Dni:</label>
        <input
          type="text"
          id="dni"
          required
          onChange={(event) =>
            setStudent({ ...student, dni: event.target.value })
          }
        ></input>

        <br></br>

        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          required
          onChange={(event) =>
            setStudent({ ...student, nombre: event.target.value })
          }
        ></input>

        <br></br>

        <label htmlFor="direccion">Direccion</label>
        <input
          type="text"
          id="direccion"
          required
          onChange={(event) =>
            setStudent({ ...student, direccion: event.target.value })
          }
        ></input>

        <br></br>

        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          minLength={15}
          id="edad"
          required
          onChange={(event) =>
            setStudent({ ...student, edad: event.target.value })
          }
        ></input>

        <br></br>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          onChange={(event) =>
            setStudent({ ...student, email: event.target.value })
          }
        ></input>

        <br></br>

        <label htmlFor="asignatura">Asignatura</label>
        <select
          id="asignatura"
          onChange={(event) =>
            setStudent({ ...student, asignatura: event.target.value })
          }
        >
          <option value="1">Matemáticas</option>
          <option value="2">Informática</option>
          <option value="3">Inglés</option>
          <option value="4">Lengua</option>
        </select>

        <br></br>

        <input type="submit" id="editar" value="Nuevo"></input>
      </form>
    </>
  );
}
