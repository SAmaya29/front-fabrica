import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function HomeSelection() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        ¿Cómo quieres continuar?
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <Button
          text="Crear hogar"
          onClick={() => navigate("/create-home")}
        />
      </div>

      <Button
        text="Unirse a un hogar"
        onClick={() => navigate("/join-home")}
      />
    </div>
  );
}