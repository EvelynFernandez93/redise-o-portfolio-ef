import React, { useEffect, useRef, useState } from "react";
import "../Trabajemos/Trabajemos.css";

const Trabajemos = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detectar cuando la sección entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`trabajemos-contenedor ${visible ? "visible" : ""}`}
    >
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

