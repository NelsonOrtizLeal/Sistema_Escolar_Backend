import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import * as API from "./services/data";

export function StudentCalifications() {
  let params = useParams();

  const [calificaciones, setCalificaciones] = useState([]);

  useEffect(() => {
    API.CalificacionesMatricula(params.matriculaId).then((data) =>
      setCalificaciones(data)
    );
  }, [params]);

  return (
    <>
      <Header />
      <p>
        Pantalla de calificaciones del alumno con matricula {params.matriculaId}
      </p>

      <table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Nota</th>
            <th>Porcentaje</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {calificaciones?.map((calificacion) => (
            <tr key={calificacion.id}>
              <td>{calificacion.descripcion}</td>
              <td>{calificacion.nota}</td>
              <td>{calificacion.porcentaje}%</td>
              <td>Eliminar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
