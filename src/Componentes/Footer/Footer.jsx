import React from "react";
import "../Footer/Footer.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Facebook from "../Icons/Facebook.svg";
import Instagram from "../Icons/Instagram.svg";

const Footer = () => {
  // Activar el hook global
  useScrollAnimation();

  return (
    <div className="footer-contenedor animar">
      <div className="footer-contenido">

        <div className="footer-contenido1 texto-descriptivo">
          <p>
            Este proyecto fue hecho con mucho{" "}
            <strong className="resaltado">amor</strong>, ah, y también con{" "}
            <strong className="resaltado">React</strong>.
          </p>
        </div>

        <div className="footer-contenido-redes">
          <div className="footer-contenido2 texto-descriptivo">
            <p>Te invito a seguirme en mis redes</p>
          </div>
          <div className="footer-redes">
            <a
              href="https://www.facebook.com/share/17os8NHr7g/"
              target="_blank"
              rel="noopener noreferrer"
              className="icono-link"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook icon" className="icono-img" />
            </a>
            <a
              href="https://www.instagram.com/entrecerrosestudiocreativo?igsh=eXFleWx3eGg1ZzRm"
              target="_blank"
              rel="noopener noreferrer"
              className="icono-link"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram icon" className="icono-img" />
            </a>
          </div>
        </div>

        <div className="footer-contenido3">
          <p>© 2025 Evelyn Fernandez</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
