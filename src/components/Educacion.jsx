export default function Educacion({lista}) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {lista.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.ano})
            <p>{edu.tipo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
