// StackTecnologias.jsx
export default function StackTecnologias({tecnologias}) {
  // Función para asignar colores según el tipo de tecnología
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tech, index) => (
          <li key={tech.id ?? index} style={{color: obtenerColor(tech.tipo)}}>
            {tech.nombre} - <em>{tech.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
