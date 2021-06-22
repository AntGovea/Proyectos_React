import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //CONTROLADOR


  //Citas en localStorage
  //obtener las citas delñ localStorage, en caso de no haber, inicialisa con un arreglo vacio
  let citasIniciales=JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[];
  }
 

  //Nota:recuerda que un arreglo son variables u obj del mismo tipo
  //y los objetos contienen variables de diferente tipo
  const [citas, setCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(()=>
        {
          //en caso de haber un cambio o nueva cita->guardala en localStorage
          if(citasIniciales!=null && citasIniciales!=undefined){
           //LocalStorage solo soporta Strings 
            localStorage.setItem('citas',JSON.stringify(citas));
          }
         /* else{
            localStorage.setItem('citas',JSON.stringify(citas));
          
          }*/

        },[citas]//dependencia delk useEffect

             );

  //FUNCION QUE TOME LAS CITAS ACTUALES Y AGREGE LA NUEVA
  const handleCitas = (nuevaCita) => {
    // console.log(nuevaCita);
    setCitas([...citas, nuevaCita]);
  };

  const deleteCitaById = (idCita) => {
    console.log(`eliminando la cita ${idCita}`);
    if (idCita != null && idCita != undefined) {
      console.log(`estamos dentro ${idCita}`);
      const citasActualizadas = citas.filter((cita) => cita.id !== idCita);

      console.log(citasActualizadas);
      setCitas(citasActualizadas);
      console.log(citasActualizadas);
    } else {
      return;
    }
  };

  //Mensaje Condicional
   const tituloCitas=
   citas.length === 0 ? 'No hay citas'  : 'Administra tus citas';

  // console.log(citas);

  //VISTA
  return (
    <Fragment>
      <h1>Administrador de Pacientes :D</h1>
      <div clasName="container">
        <tr>
          <td>
            <div clasName="one-half column">
              <Formulario crearCita={handleCitas} />
            </div>
          </td>
          <td>
            <div clasName="one-half column">
              <h2>{tituloCitas}</h2>
              {
                // console.log(citas)
                citas.map((cita) => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={deleteCitaById}
                  />
                ))
              }
            </div>
          </td>
        </tr>
      </div>
    </Fragment>
  );
}

export default App;
