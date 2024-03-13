import React from "react";
import Container from "@/components/container/Container";

function AboutPage() {
  return (
    <div>
      <Container className="text-sm">
        <div className="mt-4 ">Me dió flojera hacer esta vista :v</div>
        <div className="mt-3">Miembros de LUC:</div>
        bob, leolin, yucra, jordex, jairo, edward, césar, gavino, tuki, elias,
        joel, ydenek, alfredo, luis y yo
        <div className="mt-3">Colaboradores:</div>
        <div>Stefano Ramirez: Hizo el diseño en figma</div>
        <div>Mi hermano: Hizo el logo y la animación del logo</div>
        <div>
          Tú: Hiciste comentarios y valoraciones para ayudar a tus compañeros 
        </div>
        <div className="mt-4">
          Si tienes alguna idea de cómo mejorar la página o crear otra página
          chévere, háblanos por facebook
        </div>
        <div className="mt-4">
          Recuerda que sólo puedes iniciar sesión con tu correo uni
        </div>
      </Container>
    </div>
  );
}

export default AboutPage;
