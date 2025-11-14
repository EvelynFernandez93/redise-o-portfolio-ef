import React from "react";
import "../Trabajemos/Trabajemos.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from 'react-router-dom'
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
        <Link to={'mailto:endeveloper1@gmail.com'} target="_blank">
                            <div className='boton-terciario'>Contactar</div>
            </Link>
      </div>
    </div>
  );
};

export default Trabajemos;
