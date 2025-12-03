export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo: "Tecnología en Análisis y Desarrollo de Software",
      institucion: "SENA",
      ano: "2025-2027",
      tipo: "Tecnólogo",
    },
    {
      id: 2,
      titulo: "Semillero de Liderazgo sobre Comunicación No Violenta",
      institucion: "Civix Colombia",
      ano: "2024",
      tipo: "Seminario",
    },
    {
      id: 3,
      titulo: "Cursos Complementarios de Inglés",
      institucion: "SENA",
      ano: "2025",
      tipo: "Curso Complementario",
    },
    {
      id: 4,
      titulo: "Ingeniería de Sistemas",
      institucion: "Universidad de Antioquia",
      ano: "2028-2033",
      tipo: "Pregrado",
    },
    {
      id: 5,
      titulo: "Desarrollo de Videojuegos",
      institucion: "Platzi",
      ano: "2026",
      tipo: "Curso Online",
    },
    {
      id: 6,
      titulo: "React.js Avanzado",
      institucion: "Udemy",
      ano: "2024",
      tipo: "Curso Online",
    },
    {
      id: 7,
      titulo: "Técnico en Redes y Telecomunicaciones",
      institucion: "SENA",
      ano: "2023-2024",
      tipo: "Técnico",
    },
    {
      id: 8,
      titulo: "Taller de Seguridad de Aplicaciones Web",
      institucion: "HackerOne Academy",
      ano: "2024",
      tipo: "Taller",
    },
    {
      id: 9,
      titulo: "Fundamentos de Bases de Datos SQL",
      institucion: "Coursera",
      ano: "2023",
      tipo: "Curso Online",
    },
    {
      id: 10,
      titulo: "Metodología Agile y Scrum Master",
      institucion: "Scrum.org",
      ano: "2024",
      tipo: "Certificación",
    },
    {
      id: 11,
      titulo: "Cloud Computing con AWS",
      institucion: "A Cloud Guru",
      ano: "2025",
      tipo: "Curso Online",
    },
    {
      id: 12,
      titulo: "Git y GitHub para Principiantes",
      institucion: "LinkedIn Learning",
      ano: "2023",
      tipo: "Curso Online",
    },
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.ano})
            <p>{edu.tipo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
