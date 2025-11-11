import React, { useState, useEffect } from "react";
import "../Habilidades/Habilidades.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const HabilidadCard = ({ porcentaje, titulo, descripcion, index }) => {
  const [valor, setValor] = useState(0);

  // Animación de número progresiva
  useEffect(() => {
    let start = 0;
    const end = porcentaje;
    const duration = 2000; // 2 segundos
    const stepTime = 10;
    const step = (end / duration) * stepTime;

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setValor(Math.round(start));
    }, stepTime);

    return () => clearInterval(interval);
  }, [porcentaje]);

  return (
    <div className="habilidades-cards animar" style={{ transitionDelay: `${index * 0.2}s` }}>
      <div className="habilidades-card-informacion">
        <p className="habilidades-numero">{valor}%</p>
        <p className="subtitulo-importante">{titulo}</p>

        <div className="card-slide">
          <div className="card-slide-fill" style={{ width: `${valor}%` }}></div>
        </div>
      </div>

      <div className="habilidades-card-descripcion texto-card">
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

const Habilidades = () => {
  useScrollAnimation();

  const habilidades = [
    {
      porcentaje: 75,
      titulo: "Diseño gráfico",
      descripcion:
        "Identidad de marca, diseño de logo, creación de contenido creativo, elección de colores y tipografía.",
    },
    {
      porcentaje: 80,
      titulo: "Diseño UX/UI",
      descripcion:
        "Research, diseño de interfaces y prototipos interactivos con Figma, diseño responsive, pruebas A/B.",
    },
    {
      porcentaje: 85,
      titulo: "Desarrollo frontend",
      descripcion:
        "Desarrollo de sitios con HTML, CSS, JavaScript, frameworks como Bootstrap, Node.js y React. Enfoque en diseño responsive.",
    },
  ];

  return (
    <div className="habilidades-contenedor animar">
      <div className="habilidades-contenido">
        <div className="habilidades-titulo titulo-importante">
          <p>Mis habilidades</p>
        </div>

        <div className="habilidades-componente-cards">
          {habilidades.map((h, i) => (
            <HabilidadCard
              key={i}
              porcentaje={h.porcentaje}
              titulo={h.titulo}
              descripcion={h.descripcion}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
