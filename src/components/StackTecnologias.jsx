// StackTecnologias.jsx
export default function StackTecnologias({tecnologias}) {
  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
