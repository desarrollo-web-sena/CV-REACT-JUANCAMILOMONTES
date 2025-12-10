                                        Resultado Actividad 5

(a causa de un error al borar un README.md que contenia el paso a paso, adjuntos capturas del resultado de la actividad 5)

![CabeceraCV](image.png)
![Educacion](image-1.png)
![Experiencia](image-2.png)
![Perfil](image-3.png)
![prueba de funcionamiento en chrome](image-4.png)

                                        Resultado Actividad 6

![Experiencia](image-5.png)
![Educacion](image-6.png)
![StackTecnologias](image-7.png)
![App.jsx](image-8.png)
![prueba funcionamiento 1](image-9.png)
![prueba de funcionamiento 2](image-10.png)

                                        Resultado Actividad 7

Este proyecto utiliza props y desestructuración para renderizar un CV dinámico.

Componentes:

- CabeceraCV: recibe nombre, cargo, ciudad, contacto
- Perfil: recibe resumen
- Experiencia: recibe arreglo de experiencias
- Educación: recibe arreglo de estudios

Los datos se almacenan en App.jsx como constantes y se pasan mediante props.

Los props en React son datos que un componente padre le envía a un componente hijo. Permiten que los componentes sean reutilizables y dinámicos. En mi proyecto de CV, App.jsx envía los datos personales, el perfil, las experiencias y la educación a cada componente. Los componentes reciben estos datos mediante desestructuración de props para poder mostrarlos en pantalla.

![Commits realizados](image-11.png)
![pruebas de funcionamiento 1](image-12.png)
![prueba de funcionamiento 2](image-13.png)

                                        Resultado actividad 8

Funcionalidades implementadas

1. Toggle de habilidades
   Un botón permite **mostrar u ocultar** la sección de habilidades dinámicamente.  
   Esto funciona usando `useState` y un evento `onClick`.

2. Formulario para agregar tecnologías
   Incluye un formulario controlado que permite escribir una nueva tecnología y agregarla al stack.  
   El formulario:

- Usa estado local con `useState`
- Escucha cambios con `onChange`
- Evita la recarga con `event.preventDefault()`
- Envía el dato al componente padre usando props

3. Estado global en App.jsx
   La lista de tecnologías se almacena en el componente padre `App.jsx` para que todos los componentes tengan acceso a ella y se mantenga una **fuente de verdad única**.

4. Renderizado dinámico del stack
   `StackTecnologias.jsx` ahora recibe las tecnologías por props desde `App.jsx`  
   y las dibuja con `.map()`, asignando color según el tipo.

5. Separación lógica de datos
   Los datos base del CV se guardan en `cvData.js` y el estado dinámico se maneja en `App.jsx`.

Cómo iniciar el proyecto

Para iniciar este proyecto primero debes instalar las dependencias ejecutando el comando npm install dentro de la carpeta del proyecto. Una vez instaladas, puedes iniciar el servidor de desarrollo usando npm run dev. Esto abrirá la aplicación en tu navegador (generalmente en http://localhost:5173
). Si deseas generar una versión lista para producción, usa el comando npm run build y, si quieres previsualizar esa versión optimizada, ejecuta npm run preview.
