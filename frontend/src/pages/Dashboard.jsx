import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Bienvenido
        </h2>

        <div style={styles.card}>
          <p style={{ marginBottom: "10px" }}>
            <strong>Hogar:</strong> Mi Hogar
          </p>

          <p>
            <strong>Rol:</strong> Admin
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fafafa",
  },
};