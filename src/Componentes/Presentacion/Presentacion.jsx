import React, { useEffect, useRef, useState } from "react";
import "../Presentacion/Presentacion.css";

const Presentacion = () => {
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
    <section
      ref={sectionRef}
      className={`inicio-contenedor ${visible ? "visible" : ""}`}
    >
      <div className="inicio-contenido">
        <div className="inicio-informacion">
          <h1 className="headline1">¡Hola, soy Evelyn Fernández!</h1>
          <h2 className="titulo-importante">
            Diseñadora UX/UI & Desarrolladora Frontend
          </h2>
          <p className="subtitulo-importante">
            Creo experiencias digitales accesibles y centradas en el usuario
          </p>
          <button className="boton-terciario">Ver proyectos</button>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
