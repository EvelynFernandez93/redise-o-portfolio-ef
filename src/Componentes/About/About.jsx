import React from "react";
import "../About/About.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const About = () => {
  // Hook global que activa animaciones .animar al entrar en pantalla
  useScrollAnimation();

  return (
    <div className="about-contenedor animar">
      <div className="about-contenido">
        <div className="about-titulo titulo-importante">
          <p>¿Qué puedo contarte sobre mí?</p>
        </div>

        <div className="about-descripcion">
          <div className="about-img animar">
            <img
              className="a-img"
              src="/Img-about.png"
              alt="Imagen de perfil"
            />
          </div>

          <div className="about-inf texto-descriptivo animar">
            <p>
              Soy <strong className="resaltado">Evelyn Fernández</strong>, 
              Diseñadora <strong className="resaltado">UX/UI</strong> y 
              Desarrolladora Frontend de Mendoza, Argentina. 
              Me apasiona convertir ideas en experiencias digitales que conecten 
              con las personas y reflejen la esencia de cada marca. <br /><br />
              
              Disfruto colaborar con emprendedores y empresas para construir 
              identidades visuales coherentes, interfaces funcionales y sitios 
              web centrados en el usuario. <br /><br />
              
              Me definen la creatividad, la organización y un enfoque empático 
              y colaborativo. Creo que un buen diseño no solo se ve bien, 
              sino que comunica, funciona y genera confianza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
