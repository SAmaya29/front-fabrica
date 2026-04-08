import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Iniciar sesión
      </h2>

      <div style={{ marginBottom: "10px" }}>
        <Input label="Correo" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Input label="Contraseña" type="password" />
      </div>

      <Button
        text="Entrar"
        onClick={() => navigate("/dashboard")}
      />
    </div>
  );
}