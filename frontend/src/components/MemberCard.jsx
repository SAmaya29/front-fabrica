export default function MemberCard({ name, role, onDelete }) {
  return (
    <div style={styles.card}>
      <div>
        <strong>{name}</strong>
        <p>{role}</p>
      </div>

      {onDelete && (
        <button onClick={onDelete} style={styles.deleteBtn}>
          Eliminar
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
  },
};