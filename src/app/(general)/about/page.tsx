import React from "react";
import Container from "@/components/container/Container";

function AboutPage() {
  return (
    <div>
      <Container className="text-sm">
        <div>gaaaaa</div>
        <div className="mt-4 ">Me dió flojera hacer esta vista :v</div>
        <div className="mt-3">Miembros de LUC:</div>
        bob, leolin, yucra, jordex14, kazuo, edward, césar, tuki, elias,joel,
        ydenek, this_is_AM, luis y yo
        <div className="mt-3">Colaboradores:</div>
        <div>Stefano Ramirez: Hizo el diseño en figma</div>
        <div>Mi hermano: Hizo el logo y la animación del logo</div>
        <div>
          Tú: Hiciste comentarios y valoraciones para ayudar a tus compañeros
        </div>
        <ul className="mt-3">Mensaje de LUC:</ul>
        <li>
          El propósito principal de esta plataforma es centralizar las opiniones de
          los estudiantes de la UNI acerca de sus profesores, facilitando así
          que otros alumnos puedan revisar referencias sobre los docentes con
          los que planean matricularse o ya lo han hecho.
        </li>
        <li>
          LUC es el nombre de nuestro grupo de amigos, lo usamos aquí porque
          planeamos crear otros proyectos más adelante y queremos que todos
          estén bajo este sello.
        </li>
        <li>
          Si tienes alguna idea de cómo mejorar la página, crear otra página o
          algún proyecto de programación con javascript, phyton, php y flutter,
          háblanos por facebook.
        </li>
        <li>
          Recuerda que sólo puedes iniciar sesión con tu correo uni.
        </li>
        <li>
          Gracias por tomarte el tiempo de entrar, si pudieras comentar o valorar algún profesor que te enseñó para llenar de contenido la página, estaría piola :).
        </li>
      </Container>
    </div>
  );
}

export default AboutPage;
