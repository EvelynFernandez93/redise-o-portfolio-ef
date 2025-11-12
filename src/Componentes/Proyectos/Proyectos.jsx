import React, { useRef } from "react";
import CardProyectos from "../CardProyectos/CardProyectos";
import data from "../../data/data.json";
import "./Proyectos.css";

const Proyectos = () => {
  const carrouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carrouselRef;
    const scrollAmount = direction === "left" ? -350 : 350;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="proyectos-contenedor">
      <h2 className="proyecto-titulo">Mis Proyectos más recientes</h2>
      <div className="carrousel-botones">
        <button onClick={() => scroll("left")}>‹</button>
        <div className="proyectos-carrousel" ref={carrouselRef}>
          {data.map((proyecto) => (
            <CardProyectos key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
        <button onClick={() => scroll("right")}>›</button>
      </div>
    </div>
  );
};

export default Proyectos;
