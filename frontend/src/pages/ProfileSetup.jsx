import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ProfileSetup() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Completa tu perfil
      </h2>

      <div style={{ marginBottom: "10px" }}>
        <Input label="Teléfono" />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Input label="Edad" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Input label="Sexo" />
      </div>

      <Button
        text="Continuar"
        onClick={() => navigate("/home-selection")}
      />
    </div>
  );
}