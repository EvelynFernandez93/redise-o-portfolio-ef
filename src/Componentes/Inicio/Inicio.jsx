import React from 'react'
import "../Inicio/Inicio.css"
import Presentacion from '../Presentacion/Presentacion'
import About from '../About/About'
import Invitacion from '../Invitacion/Invitacion'
const Inicio = () => {
  return (
    <div>
      <Presentacion />
      <About />
      <Invitacion />
    </div>
  )
}

export default Inicio
