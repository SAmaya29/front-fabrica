import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function CreateHome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Crear hogar
      </h2>

      <div style={{ margin: "0 10px 20px 10px" }}>
        <Input label="Nombre del hogar" />
      </div>

      <div style={{ margin: "0 10px" }}>
        <Button
          text="Crear"
          onClick={() => navigate("/dashboard")}
        />
      </div>
    </div>
  );
}