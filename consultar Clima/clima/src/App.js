import React, { Fragment, useEffect,useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [consultar,setConsultar]=useState(false);
  const [resultado_clima,setResultadoClima]=useState({});
  const [error,setError]=useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(()=>{
      const consultarApi= async ()=>{
        
        if(consultar){
          const appId='d3ef5186b36277fa80bd6c0ff1c77f59';

          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
          const respuesta = await fetch(url);
          const resultado=await respuesta.json();
          setResultadoClima(resultado);
          setConsultar(false);
          
          if(resultado.cod==='404'){
            setError(true);
          }
          else{
            setError(false);
          }
        }
      }
      consultarApi();
      //eslint-disable-next-line
  },[consultar]);

    let componente;
    if(error){
          componente=<Error  mensaje={'No hay resultados'}/>
    }else{
        componente= <Clima
        resultado_clima={resultado_clima}
        />
    }

  return (
    <Fragment>
      <Header titulo={"Clima React App"} />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
              consultar={consultar}
              />
            </div>
            <div className="col m6 s12">
             {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
