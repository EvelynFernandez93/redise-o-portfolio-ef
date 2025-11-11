import React, { useEffect, useRef, useState } from "react";
import "../Invitacion/Invitacion.css";
import Github from "../Icons/Github.svg";
import Linkedin from "../Icons/Linkedin.svg";
import Behance from "../Icons/Behance.svg";

const Invitacion = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => unobserve(entry.target);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`invitacion-contenedor ${visible ? "visible" : ""}`}
    >
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
