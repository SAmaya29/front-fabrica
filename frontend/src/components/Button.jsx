import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "10px", width: "100%" }}>
      {text}
    </button>
  );
}