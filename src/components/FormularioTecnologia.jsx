// FormularioTecnologia.jsx
import {useState} from "react";

export default function FormularioTecnologia({onAdd}) {
  const [tecnologia, setTecnologia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tecnologia.trim()) return;

    onAdd(tecnologia);
    setTecnologia("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tecnologia}
        placeholder="Nueva tecnología"
        onChange={(e) => setTecnologia(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
