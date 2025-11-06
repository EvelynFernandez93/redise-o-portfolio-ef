import React from 'react'
import "../About/About.css"

const About = () => {
  return (
    <div className='about-contenedor'>
        <div className='about-contenido'>
            <div className='about-titulo titulo-importante'>
                <p>¿Qué puedo contarte sombre mi?</p>
            </div>
            <div className='about-descripcion'>
                <div className='about-img'><img className='a-img' src='/Img-about.png' alt='Imagen de perfil'></img></div>
                <div className='about-inf texto-descriptivo'>
                    <p>Soy Evelyn Fernández, Diseñadora UX/UI y Desarrolladora Frontend de Mendoza, Argentina. Me apasiona convertir ideas en experiencias digitales que conecten con las personas y reflejen la esencia de cada marca.
 Disfruto colaborar con emprendedores y empresas para construir identidades visuales coherentes, interfaces funcionales y sitios web centrados en el usuario.<br></br>

Me definen la creatividad, la organización y un enfoque empático y colaborativo. Creo que un buen diseño no solo se ve bien, sino que funciona, comunica y genera confianza.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
