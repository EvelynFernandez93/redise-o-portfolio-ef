import React from 'react'
import "../Tecnologias/Tecnologias.css"
import htmlIcon from "../../Componentes/Icons/Html5.svg"
import cssIcon from "../../Componentes/Icons/CSS3.svg"
import jsIcon from "../../Componentes/Icons/JavaScript.svg"
import illustratorIcon from "../../Componentes/Icons/Illustrator.svg"
import photoshopIcon from "../../Componentes/Icons/Photoshop.svg"
import figmaIcon from "../../Componentes/Icons/Figma.svg"
import reactIcon from  "../../Componentes/Icons/Reacticon.svg"
import boostrapIcon from  "../../Componentes/Icons/Boostrap.svg"
const Tecnologias = () => {
      const techs = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Illustrator", icon: illustratorIcon },
    { name: "Photoshop", icon: photoshopIcon },
    { name: "Boostrap", icon: boostrapIcon },
  ];
    const duplicated = [...techs, ...techs];
  return (
    <div className="tecnologias-contenedor">
      {/* <h2 className="tecnologias-titulo subtitulo-importante">Tecnologías que uso</h2> */}

      <div className="tecnologias-carrusel">
        <div className="carrusel-track">
          {duplicated.map((tech, index) => (
            <div className="tecnologia-item" key={index}>
              <img src={tech.icon} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias
