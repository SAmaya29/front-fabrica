import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Profile() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Perfil
        </h2>

        <div style={{ marginBottom: "10px" }}>
          <Input label="Nombre" />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <Input label="Correo" />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <Input label="Teléfono" />
        </div>

        <p style={{ margin: "15px 0", fontWeight: "bold" }}>
          ID: USR-123456
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button text="Guardar cambios" />
          <Button text="Cancelar" />
        </div>
      </div>
    </div>
  );
}