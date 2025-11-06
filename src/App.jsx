import { BrowserRouter, Route, Routes} from  "react-router-dom";
import './App.css'
import Inicio from "./Componentes/Inicio/Inicio";

function App() {
  
  return (
    <div className="contenedor-gral">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio />} />
         {/*    <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Proyectos />} />
            <Route path="/proyecto/:id" element={<ItemDetail />} /> */}
          </Routes>
          
        </BrowserRouter>
    </div>
  )
}

export default App
