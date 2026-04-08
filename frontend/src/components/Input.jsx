export default function Input({ label, type = "text" }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <input type={type} style={{ width: "100%", padding: "8px" }} />
    </div>
  );
}