import React from "react";
import "../Presentacion/Presentacion.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Presentacion = () => {
  // Hook global para activar las animaciones
  useScrollAnimation();

  return (
    <section className="inicio-contenedor animar">
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
