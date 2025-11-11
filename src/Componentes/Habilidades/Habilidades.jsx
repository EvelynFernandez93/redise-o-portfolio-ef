import React, { useState, useEffect, useRef } from "react";
import "../Habilidades/Habilidades.css";

const HabilidadCard = ({ porcentaje, titulo, descripcion, index }) => {
  const [visible, setVisible] = useState(false);
  const [valor, setValor] = useState(0);
  const cardRef = useRef(null);

  // Detectar cuando la card entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Animar número de 0 al porcentaje
  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = porcentaje;
      const duration = 2000; // ⏱️ Cambiado a 2 segundos
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
    }
  }, [visible, porcentaje]);

  return (
    <div
      ref={cardRef}
      className={`habilidades-cards ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.2}s` }} // delay en cascada
    >
      <div className="habilidades-card-informacion">
        <p className="habilidades-numero">{valor}%</p>
        <p className="subtitulo-importante">{titulo}</p>

        {/* Barra con fondo y relleno */}
        <div className="card-slide">
          <div
            className="card-slide-fill"
            style={{ width: `${visible ? porcentaje : 0}%` }}
          ></div>
        </div>
      </div>

      <div className="habilidades-card-descripcion texto-card">
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

const Habilidades = () => {
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
    <div className="habilidades-contenedor">
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
