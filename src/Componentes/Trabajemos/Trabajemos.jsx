import React from "react";
import "../Trabajemos/Trabajemos.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Trabajemos = () => {
  // Hook global de animaciones de scroll
  useScrollAnimation();

  return (
    <div className="trabajemos-contenedor animar">
      <div className="trabajemos-contenido">
        <div className="trabajemos-titulo texto-descriptivo">
          <p>
            Si estás buscando alguien que te acompañe a potenciar tu presencia
            digital con una mirada estratégica y humana, ¡hablemos!
          </p>
        </div>

        <button className="boton-terciario">
          <span>Contactar</span>
        </button>
      </div>
    </div>
  );
};

export default Trabajemos;
