const URL = "https://localhost:7218/api";

// Función para hacer la peticion a EndPoint -> Autenticacion
export function login(usuario, pass) {
  let datos = { usuario, pass };

  return fetch(URL + "/Profesor/autenticacion", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "content-Type": "application/json",
    },
  }).then((data) => data.text());
}

// Función para obtener la listas de estudiantes de un profesor
export function getAlumnoProfesor(usuario) {
  return fetch(URL + "/Alumno/alumnoProfesor?usuario=" + usuario, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
  }).then((data) => data.json());
}

// Funcion para agregar un nuevo alumno
export function createStudent(student) {
  const data = {
    dni: student.dni,
    nombre: student.nombre,
    direccion: student.direccion,
    edad: student.edad,
    email: student.email,
  };

  return fetch(URL + "/Alumno/alumno?id_asignatura=" + student.asignatura, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-Type": "application/json",
    },
  }).then((data) => data.text());
}

// Función para eliminar un alumno y sus calificaciones
export function deleteStudent(id) {
  return fetch(URL + "/Alumno/alumno?id_alumno=" + id, {
    method: "DELETE",
    headers: {
      "content-Type": "application/json",
    },
  }).then((data) => data.text());
}

// Funcipon para obtener toda la informacion de un estudiante
export function getStudent(id) {
  return fetch(URL + "/Alumno/alumno?id=" + id, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
  }).then((data) => data.json());
}
