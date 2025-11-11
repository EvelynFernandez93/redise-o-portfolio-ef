import React from "react";
import "../Invitacion/Invitacion.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Github from "../Icons/Github.svg";
import Linkedin from "../Icons/Linkedin.svg";
import Behance from "../Icons/Behance.svg";

const Invitacion = () => {
  // Activar el hook global de animaciones
  useScrollAnimation();

  return (
    <div className="invitacion-contenedor animar">
      <div className="invitacion-contenido">
        <div className="invitacion-inf">
          <div className="invitacion-titulo">
            <p>Te invito a conocerme</p>
          </div>
          <div className="invitacion-subtitulo">
            <p>Estos son mis perfiles profesionales</p>
          </div>
        </div>

        <div className="invitacion-iconos">
          <a
            href="https://github.com/EvelynFernandez93"
            target="_blank"
            rel="noopener noreferrer"
            className="icono-link"
            aria-label="GitHub"
          >
            <img src={Github} alt="GitHub icon" className="icono-img" />
          </a>

          <a
            href="https://www.linkedin.com/in/evelynfernandez93/"
            target="_blank"
            rel="noopener noreferrer"
            className="icono-link"
            aria-label="LinkedIn"
          >
            <img src={Linkedin} alt="LinkedIn icon" className="icono-img" />
          </a>

          <a
            href="https://www.behance.net/evelynfernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="icono-link"
            aria-label="Behance"
          >
            <img src={Behance} alt="Behance icon" className="icono-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Invitacion;
