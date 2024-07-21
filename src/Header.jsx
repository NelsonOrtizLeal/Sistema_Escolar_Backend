import { Link } from "react-router-dom";
export function Header() {
    return (
        <>
            <p>
                <Link to={'/dashboard'}>Listado</Link>
                <Link to={'/student'}>Nuevo</Link>
                <span>Cerrar sesion</span>
            </p>
        </>
    );
}