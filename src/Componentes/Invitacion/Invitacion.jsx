import React from "react";
import "../Invitacion/Invitacion.css";

// Importá tus íconos como imágenes normales
import Github from "../Icons/Github.svg";
import Linkedin from "../Icons/Linkedin.svg";
import Behance from "../Icons/Behance.svg";

const Invitacion = () => {
  return (
    <div className="invitacion-contenedor">
      <div className="invitacion-contenido">
        <div className="invitacion-inf subtitulo-importante">
          <div className="titulo-importante">
            <p>Te invito a conocerme</p>
          </div>
          <div className="subtitulo-importante">
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
