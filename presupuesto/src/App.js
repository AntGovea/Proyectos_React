import "./App.css";
import React, {  useState,useEffect } from "react";
import Pregunta from "./components/pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/listado";
import ControlPresupuesto from "./components/ControlPresupuesto";



function App() {
  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos]= useState([]);
  const [gasto, setGasto]= useState({});
  const [creargasto, setCrearGasto]= useState(false);

  //UseEffect que acrtualiza el restante 
  //
  useEffect(()=>{
    if(creargasto){
      //agrega el nuevo gasto
      setGastos([...gastos,gasto])
      
      //resta el presupuesto actual
      const presupuestoRestante=restante-gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    
    setCrearGasto(false)
  
  },[gasto,creargasto,gastos,restante]);
// 

    //agregamos un nuevo gasto}

    // const agregarNuevoGasto=(gasto)=>{
    //   setGastos([...gastos,gasto]);
    //   console.log(gastos);
     
      
    // }

  return (
    <div className="container">
      <header>
        <h2>Gasto Semanal</h2>
        <div className="contenido-principal contenido">
         
          {
             
            mostarpregunta ?(
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostarpregunta={setMostrarPregunta}
              />
            ) :(
                 <div className="row">
            <div className="one-half column">
              <Formulario
              setCrearGasto={setCrearGasto}
              setGasto={setGasto}
              />
            
            </div>
            <div className="one-half column">
              <Listado
              gastos={gastos}
              />
              <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
              />
            </div>
          </div>


            )
          }
            
         
         
        </div>
      </header>
    </div>
  );
}

export default App;
