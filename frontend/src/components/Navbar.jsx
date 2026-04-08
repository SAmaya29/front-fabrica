import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link to="/dashboard">Inicio</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/members">Miembros</Link>
      <Link to="/login">Cerrar sesión</Link>
    </nav>
  );
}