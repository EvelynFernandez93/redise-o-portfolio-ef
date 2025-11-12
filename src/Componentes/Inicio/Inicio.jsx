import React from 'react'
import "../Inicio/Inicio.css"
import Presentacion from '../Presentacion/Presentacion'
import About from '../About/About'
import Invitacion from '../Invitacion/Invitacion'
import Tecnologias from '../Tecnologias/Tecnologias'
import Habilidades from '../Habilidades/Habilidades'
import Trabajemos from '../Trabajemos/Trabajemos'
import Footer from '../Footer/Footer'
import Proyectos from '../Proyectos/Proyectos'
const Inicio = () => {
  return (
    <div>
      <Presentacion />
      <Tecnologias />
      <About />
      <Invitacion />
      <Habilidades />
      <Proyectos />
      <Trabajemos />
      <Footer />
    </div>
  )
}

export default Inicio
