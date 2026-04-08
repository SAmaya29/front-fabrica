import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Members() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Miembros
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={styles.memberItem}>
              <span>Juan</span>
              <span>Admin</span>
            </li>

            <li style={styles.memberItem}>
              <span>Pedro</span>
              <span>Miembro</span>
            </li>
          </ul>
        </div>

        <h3 style={{ marginBottom: "10px" }}>Agregar miembro</h3>

        <div style={{ marginBottom: "15px" }}>
          <Input label="ID usuario" />
        </div>

        <Button text="Agregar" />
      </div>
    </div>
  );
}

const styles = {
  memberItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    marginBottom: "10px",
  },
};