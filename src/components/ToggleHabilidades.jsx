export default function ToggleHabilidades({visible, onToggle}) {
  return (
    <button onClick={onToggle}>
      {visible ? "Ocultar habilidades" : "Mostrar habilidades"}
    </button>
  );
}
