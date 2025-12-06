export default function CabeceraCV({nombre, cargo, ciudad, contacto}) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <ul>
        <li>Teléfono: {contacto.telefono}</li>
        <li>Correo: {contacto.correo}</li>
        <li>Ciudad: {ciudad}</li>
      </ul>
    </header>
  );
}
