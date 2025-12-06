export default function Experiencia({lista}) {
  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {lista.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
