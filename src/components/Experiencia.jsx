export default function Experiencia() {
  const experiencia = [
    {
      id: 1,
      puesto: "Desarrollador Full Stack",
      empresa: "TechSolutions Inc",
      periodo: "2022-2023",
      descripcion:
        "Desarrollo de aplicaciones web con React y Node.js, gestión de bases de datos SQL y API REST.",
    },
    {
      id: 2,
      puesto: "Desarrollador Frontend",
      empresa: "Digital Agency XYZ",
      periodo: "2023-2024",
      descripcion:
        "Creación de interfaces de usuario responsivas, implementación de componentes interactivos y testing.",
    },
    {
      id: 3,
      puesto: "Desarrollador Backend",
      empresa: "E-commerce Solutions",
      periodo: "2024-Presente",
      descripcion:
        "Desarrollo de APIs REST, gestión de bases de datos PostgreSQL y optimización de consultas.",
    },
    {
      id: 4,
      puesto: "Diseñador UX/UI",
      empresa: "Creative Studio",
      periodo: "2021-2022",
      descripcion:
        "Diseño de interfaces, prototipado en Figma, research de usuarios y mejora de experiencia.",
    },
    {
      id: 5,
      puesto: "Desarrollador Junior",
      empresa: "Startup Local",
      periodo: "2020-2021",
      descripcion:
        "Mantenimiento de código, corrección de bugs, implementación de nuevas funcionalidades básicas.",
    },
    {
      id: 6,
      puesto: "Especialista en Base de Datos",
      empresa: "DataCore Systems",
      periodo: "2023-Presente",
      descripcion:
        "Administración de servidores SQL, optimización de índices, backup y recuperación de datos.",
    },
    {
      id: 7,
      puesto: "QA Tester",
      empresa: "Software Quality Ltd",
      periodo: "2022-2023",
      descripcion:
        "Pruebas manuales y automatizadas, reporte de bugs, documentación de casos de prueba.",
    },
    {
      id: 8,
      puesto: "Técnico de Soporte IT",
      empresa: "Tech Support Center",
      periodo: "2019-2020",
      descripcion:
        "Atención al cliente, resolución de incidencias técnicas, instalación y configuración de equipos.",
    },
    {
      id: 9,
      puesto: "Desarrollador Python",
      empresa: "Data Analytics Co",
      periodo: "2024-Presente",
      descripcion:
        "Scripts de automatización, análisis de datos, creación de reportes y visualizaciones.",
    },
    {
      id: 10,
      puesto: "Gerente de Proyecto IT",
      empresa: "Consulting Group",
      periodo: "2023-2024",
      descripcion:
        "Coordinación de equipos, planificación de proyectos, seguimiento de presupuestos y entregables.",
    },
  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
