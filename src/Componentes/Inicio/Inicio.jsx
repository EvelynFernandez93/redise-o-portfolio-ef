import React from 'react'
import "../Inicio/Inicio.css"
import Presentacion from '../Presentacion/Presentacion'
import About from '../About/About'
import Invitacion from '../Invitacion/Invitacion'
import Tecnologias from '../Tecnologias/Tecnologias'
const Inicio = () => {
  return (
    <div>
      <Presentacion />
      <Tecnologias />
      <About />
      <Invitacion />
      
    </div>
  )
}

export default Inicio
