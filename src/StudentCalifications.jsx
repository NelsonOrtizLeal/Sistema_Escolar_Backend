import { useParams } from "react-router-dom";
import { Header } from "./Header";

export function StudentCalifications() {
  let params = useParams();
  return (
    <>
      <Header />
      <p>
        Pantalla de calificaciones del alumno con matricula {params.matriculaId}
      </p>
    </>
  );
}
