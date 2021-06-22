import React,{useState} from 'react';
import styled from "@emotion/styled";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";



//css con js y html con libreria emotion
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;


function App() {

const [resumen,setResumen]=useState({
  cotizacion:0,
      datos:
      {marca:'',
      year:'',
      plan:'',

      }

});
const [cargando,setCargando]=useState(false);

const {cotizacion,datos}=resumen;



  return (
    <Contenedor>
      <Header titulo={"Cotizador de Seguros"} />

      <ContenedorFormulario>
      <Formulario
        onSetResumen={setResumen}
        setCargando={setCargando}
      />
  
      {cargando ?  <Spinner/> :null}

      {!cargando? <Resumen
        datos={datos}
      />:null}
       
      {!cargando? <Resultado
        cotizacion={cotizacion}
      />:null}
      

      </ContenedorFormulario>
      
    </Contenedor>
  );
}

export default App;
