import { useState } from 'react';
import * as API from './services/data.js';
import loginImage from './assets/login.webp';

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
            <img src={loginImage} />
            <h1>Iniciar sesión</h1>
            <form id="formulario" onSubmit={handleSubmit}>
                <label htmlFor="usuario">Usuario</label>
                <input name="usuario" type='text' id="usuario" onChange={event => setTeacher({ ...teacher, usuario: event.target.value })}></input>
                <label htmlFor='password'>Password</label>
                <input type='password' id="password" onChange={event => setTeacher({ ...teacher, password: event.target.value })}></input>
                <input type="submit" id="enviar" />
            </form>
        </>
    );
}