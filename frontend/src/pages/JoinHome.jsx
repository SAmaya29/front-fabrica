export default function JoinHome() {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Unirse a un hogar
      </h2>

      <p style={{ textAlign: "center", marginBottom: "10px" }}>
        Tu ID de usuario:
      </p>

      <div style={styles.idBox}>
        USR-123456
      </div>

      <button style={{ marginTop: "15px" }}>
        Copiar ID
      </button>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#555", textAlign: "center" }}>
        Comparte este ID con el administrador del hogar para que te agregue
      </p>
    </div>
  );
}

const styles = {
  idBox: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "10px",
    border: "1px dashed #3b82f6",
    borderRadius: "8px",
    background: "#eef4ff",
  },
};