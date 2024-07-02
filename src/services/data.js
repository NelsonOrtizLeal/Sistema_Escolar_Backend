const URL = "https://localhost:7218/api";

// Función para hacer la peticion a EndPoint -> Autenticacion
export function login(usuario, pass) {
    let datos = { usuario, pass };

    return fetch(URL + "/Profesor/autenticacion",
        {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "content-Type": "application/json"
            }
        }
    ).then(data => data.text())
}