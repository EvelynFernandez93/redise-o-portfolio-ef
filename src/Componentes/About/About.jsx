import React, { useEffect, useRef, useState } from "react";
import "../About/About.css";

const About = () => {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.unobserve(entry.target);
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`about-contenedor ${visible ? "visible" : ""}`}
    >
      <div className="about-contenido">
        <div className="about-titulo titulo-importante">
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

          <div className="about-inf texto-descriptivo">
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
