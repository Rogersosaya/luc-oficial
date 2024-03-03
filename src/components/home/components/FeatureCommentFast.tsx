'use client'
import { Features } from "@/components/features";
import React from "react";

function FeatureCommentFast() {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Los mejores profesores
            <br />
            de la UNI
          </>
        }
        
        text="Estos son los 3 mejores profesores según las valoraciones hechas por los alumnos, este podio se armó promediando el puntaje de la valoración general, sólo se tienen en cuenta profesores que cuenten con más de 10 valoraciones"
      />
    </Features>
  );
}

export default FeatureCommentFast;
