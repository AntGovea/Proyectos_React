//import "./App.css";
import React, { Fragment, useState } from'react';
//libreria para generacion de id´s
//import uuid from 'uuid/v4'
import {v4 as uuidv4} from 'uuid';
const Formulario=({crearCita})=>{

    const [cita,setCita]= useState(
        {//objeto
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        }
    );
    const [error,setError]= useState(false);

    //CODIGO CONTROLADOR
        const handleState = (e ) => {
            console.log(e.target.value);
            setCita(
                {
                  ...cita,[e.target.name]:e.target.value
                }
            )
        }

            //Extraer los valores
            //usamos destructurin para no tener que usar cita.mascota...
            const {mascota,propietario,fecha,hora,sintomas}=cita;

             //Cuiando el usuario precione agregar cita se jecutara 
             const handleCita=(e)=>{
                 //METODO PARA EVITAR ENVIO DE INFO POR URL DE LA PAGINA
                    e.preventDefault();
                    
                    //VALIDAR
                    if(mascota.trim()===''||propietario.trim()===''||
                       fecha.trim()===''||hora.trim()===''||
                       sintomas.trim()===''){
                        setError(true);
                   // console.log("Faltan campos por llenar");
                    //siempre que haya un error recuerda regresar alv al usuario
                    return;
                            }
                        //una vez que muestre el error debemos quitar 
                        //la alerta de los campos
                            setError(false);

                     //ASIGNAR LA ID
                     cita.id=uuidv4();
                     //console.log(cita);
                     
                     //CREAR CITA  mandandosela al metodo que se ejecuta en el padre

                    crearCita(cita);
                    
                    //REINICIAR FORM
                    setCita(
                        {//objeto
                          mascota:'',
                          propietario:'',
                          fecha:'',
                          hora:'',
                          sintomas:''
        }
                    );      

                    
               //alert("Holi :3");

             }           




    //  CODIGO VISTA
    return(
        <Fragment>

            <h2>Crear cita</h2>
            {//ternario->en caso de ser true ejecuta el codigo despues del ?
             //en caso de sel false ->: ->manda un null
            }
                {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
            <form onSubmit={handleCita}>
            <label>Nombre de la Masacota</label>
            <input 
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre de la Masacota"
            onChange={handleState}
            value={mascota}
             />
              <label>Nombre del Dueño</label>
             <input 
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre del Dueño"
            onChange={handleState}
            value={propietario}
             />
              <label>Fecha</label>
             <input 
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={handleState}
            value={fecha}
           
             />
              <label>Hora</label>
             <input 
            type="time"
            name="hora"
            className="u-full-width"
            onChange={handleState}
            value={hora}
            
             />
              <label>Sintomas</label>
             <textarea
            type="text"
            name="sintomas"
            onChange={handleState}
            value={sintomas}>
            </textarea>
            <button
            type="submit"
            className="u-full-width button-primary"  >
                Agregar cita
            </button>
            </form>

        </Fragment>
        
        );


}

export default Formulario;
