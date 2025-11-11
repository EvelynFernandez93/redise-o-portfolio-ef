import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <div className="about-contenedor">
      <div className="about-contenido">
        <div className="about-titulo ">
          <p>¿Qué puedo contarte sobre mí?</p>
        </div>

        <div className="about-descripcion">
          <div className="about-img">
            <img
              className="a-img"
              src="/Img-about.png"
              alt="Imagen de perfil"
            />
          </div>

          <div className="about-inf ">
            <p>
              Soy <strong className="resaltado">Evelyn Fernández</strong>,
              Diseñadora <strong className="resaltado">UX/UI</strong> y
              Desarrolladora Frontend de Mendoza, Argentina. Me apasiona
              convertir ideas en experiencias digitales que conecten con las
              personas y reflejen la esencia de cada marca. <br />
              <br />
              Disfruto colaborar con emprendedores y empresas para construir
              identidades visuales coherentes, interfaces funcionales y sitios
              web centrados en el usuario. <br />
              <br />
              Me definen la creatividad, la organización y un enfoque empático
              y colaborativo. Creo que un buen diseño no solo se ve bien, sino
              que comunica, funciona y genera confianza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
