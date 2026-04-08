import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Crear cuenta
      </h2>

      <div style={{ marginBottom: "10px" }}>
        <Input label="Nombre" />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Input label="Correo" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Input label="Contraseña" type="password" />
      </div>

      <Button
        text="Registrarse"
        onClick={() => navigate("/profile-setup")}
      />
    </div>
  );
}