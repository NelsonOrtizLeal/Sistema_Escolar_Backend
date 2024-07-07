import { useState } from 'react';
import * as API from './services/data.js';

export function Login() {

    const [teacher, setTeacher] = useState({ usuario: '', password: '' })

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await API.login(teacher.usuario, teacher.password);

        if (response.length != 0) {
            alert("Usuario correcto.");
        } else {
            alert("Usuario o contraseña incorrecta.")
        }
    }

    return (
        <>
            <h1>Iniciar sesión</h1>
            <form id="formulario" onSubmit={handleSubmit}>
                <label>Usuario</label>
                <input type='text' id="usuario" onChange={event => setTeacher({ ...teacher, usuario: event.target.value })}></input>
                <label>Password</label>
                <input type='password' id="password" onChange={event => setTeacher({ ...teacher, password: event.target.value })}></input>
                <input type="submit" id="enviar" />
            </form>
        </>
    );
}