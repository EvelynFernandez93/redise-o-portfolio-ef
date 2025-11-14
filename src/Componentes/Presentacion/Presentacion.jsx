import React from "react";
import "../Presentacion/Presentacion.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Presentacion = () => {
  useScrollAnimation();

  // 👉 Función para hacer scroll suave
  const irAProyectos = () => {
    const section = document.getElementById("proyectos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          {/* 👉 Botón actualizado */}
          <button className="boton-terciario" onClick={irAProyectos}>
            Ver proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
