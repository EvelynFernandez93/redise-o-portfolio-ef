import React, { useRef } from "react";
import "../CardProyectos/CardProyectos.css"

const CardProyectos = ({ proyecto }) => {
  const cardRef = useRef(null);

  // Generar efecto ripple en el punto del click
  const handleClick = (e) => {
    const card = cardRef.current;
    const ripple = document.createElement("span");
    ripple.className = "md3-ripple";

    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    card.appendChild(ripple);

    // eliminar el ripple al terminar la animación
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className="card-proyecto md3-surface" ref={cardRef} onClick={handleClick}>
      <div className="card-proyecto-img">
        <img src={proyecto.img} alt={proyecto.nombre} />
      </div>

      <div className="card-proyecto-contenido">
        <div className="card-titulo ">
          <h3>{proyecto.nombre}<a
  href={proyecto.enlace}
  target="_blank"
  rel="noopener noreferrer"
  className="card-proyecto-enlace"
  onClick={(e) => e.stopPropagation()}
>
  🔗
</a></h3>
          
        </div>

        <div className="card-proyecto-subtitulo">
          <p>
            {proyecto.subtitulo} | {proyecto.diplomatura}
          </p>
        </div>

        <div className="card-proyecto-tecnologias">
          {proyecto.tecnologias.map((t, index) => (
            <p key={index}>{t.tec}</p>
          ))}
        </div>

        <div className="card-proyecto-descripcion">
          <p>{proyecto.descripcion}</p>
        </div>
        
      </div>
    </div>
  );
};

export default CardProyectos;
