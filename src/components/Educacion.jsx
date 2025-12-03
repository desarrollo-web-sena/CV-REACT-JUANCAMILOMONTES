export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo: "Tecnologia en analisis y desarollo de sorftware",
      universidad: "SENA",
      periodo: "2025-2027",
    },
    {
      id: 2,
      titulo: "semillero de liderazgo sobre Comunicacion noviolenta",
      universidad: "Civix colombia",
      periodo: "2024",
    },
    {
      id: 3,
      titulo: "cursos complementarios de ingles",
      universidad: "SENA",
      periodo: "2025",
    },
    {
      id: 4,
      titulo: "ingenieria de sistemas",
      universidad: "Universidad de antioquia",
      periodo: "2028-2033",
    },
    {
      id: 5,
      titulo: "Desarrollo de videoJuegos",
      universidad: "Platzi",
      periodo: "2026",
    },
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
